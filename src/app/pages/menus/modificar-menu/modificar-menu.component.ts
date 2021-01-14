import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MenusService} from '../menus.service';
import {Menu} from '../../../models/Menu';

@Component({
  selector: 'app-modificar-menu',
  templateUrl: './modificar-menu.component.html',
  styleUrls: ['./modificar-menu.component.css']
})
export class ModificarMenuComponent implements OnInit {

  public menu: Menu;
  public newMenu: Menu;
  public id: number;

  constructor(private _menusService: MenusService, private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  updateMenu(menuForm): void {
    this._menusService.updateMenu(menuForm.value, this.id).subscribe(
      response => {
        this.menu = response;
        this.ngbActiveModal.close(this.menu);
      }
    );

  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }

}
