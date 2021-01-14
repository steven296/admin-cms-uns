import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MenusService} from '../menus.service';
import {Menu} from '../../../models/Menu';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-menu',
  templateUrl: './crear-menu.component.html',
  styleUrls: ['./crear-menu.component.css']
})
export class CrearMenuComponent implements OnInit {

  public menu: Menu;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private _menusService: MenusService
  ) {
    this.menu = new Menu('', '',  null);
  }

  ngOnInit(): void {
  }

  crearMenu(menuForm) {
    this._menusService.createMenu(menuForm.value).subscribe(
      response => {
        Swal.fire(
          'Menu Creado con Exito!',
          'Se ha creado el menu con exito.',
          'success'
        );
        this.menu = response;
        this.ngbActiveModal.close(this.menu);
      }
    );
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }
}
