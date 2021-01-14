import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfigurationService} from '../../../services/configuration.service';
import {Menu} from '../../../models/Menu';

@Component({
  selector: 'app-crear-menu',
  templateUrl: './crear-menu.component.html',
  styleUrls: ['./crear-menu.component.css']
})
export class CrearMenuComponent implements OnInit {

  public menu: Menu;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private _configurationService: ConfigurationService
  ) {
    this.menu = new Menu('', '',  null);
  }

  ngOnInit(): void {
  }

  crearMenu(menuForm) {
    this.menu = menuForm.value;
    this.menu.estado = 1;
    this.ngbActiveModal.close(this.menu);

    /*
    this._configurationService.crearMenu(menuForm.value).subscribe(
      response => {
        console.log(response.data);
        this.ngbActiveModal.close(this.menu);
      }
    );*/
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }
}
