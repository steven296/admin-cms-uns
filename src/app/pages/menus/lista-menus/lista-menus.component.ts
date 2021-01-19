import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MenusService} from '../menus.service';
import { Menu } from '../../../models/Menu';
import {CrearMenuComponent} from '../crear-menu/crear-menu.component';
import {ModificarMenuComponent} from '../modificar-menu/modificar-menu.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-menus',
  templateUrl: './lista-menus.component.html',
  styleUrls: ['./lista-menus.component.css']
})
export class ListaMenusComponent implements OnInit {

  public menus: Menu[];

  constructor(private _menusService: MenusService, private ngbModal: NgbModal) {
    this.getMenus();
  }

  ngOnInit(): void {
  }

  getMenus() {
    this._menusService.getMenus().subscribe(
      response => {
        this.menus = response;
      }
    );
  }

  openCreateMenu(): void {
    this.ngbModal.open(CrearMenuComponent, {centered: true, size: 'md'})
      .result.then((result) => {
        this.getMenus();
        //this.menus.push(result);
    });
  }

  deleteMenu(id): void {
    Swal.fire({
      icon: 'question',
      title: '¿Desea eliminar este Menu?',
      text: 'Confirme la accion en caso contrario puede cancelarla',
      width: '40rem',
      showCancelButton: true,
      confirmButtonText: 'Eliminar Menu',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._menusService.deleteMenu(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Eliminacion Exitosa',
            text: 'Ha eliminado el menu con exito.',
            width: '40rem',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          }).then(() => {
            this.getMenus();
          });
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Eliminacion cancelada',
          text: 'Ha cancelado la eliminacion del menu',
          width: '40rem',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        }).then();
      }
    });
  }

  openEditMenu(menu): void {
    const modal = this.ngbModal.open(ModificarMenuComponent, {centered: true, size: 'md'})
    modal.componentInstance.menu = menu;
    modal.componentInstance.id = menu._id;
    modal.result.then((result) => {
        this.getMenus();
        //this.menus.push(result);
    });
  }

  updateStatusMenu(menu): void {
    this._menusService.updateStatusMenu(menu.status, menu._id).subscribe(
      response => {
        this.getMenus();
      }
    );
  }
}
