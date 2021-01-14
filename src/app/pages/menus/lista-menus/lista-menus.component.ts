import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../../services/configuration.service';

@Component({
  selector: 'app-lista-menus',
  templateUrl: './lista-menus.component.html',
  styleUrls: ['./lista-menus.component.css']
})
export class ListaMenusComponent implements OnInit {

  public menus: any[] = [{
      "name": "home",
      "href": "#home",
      "status": 1,
  }, {
      "name": "nosotros",
      "href": "#nosotros",
      "status": 1,
  }, {
      "name": "servicios",
      "href": "#servicios",
      "status": 1,
  }];

  constructor(private _configurationService: ConfigurationService) {
    //this.getMenus();
  }

  ngOnInit(): void {
  }

  getMenus() {
    this._configurationService.getConfiguration().subscribe(
      response => {
        this.menus = response.menu;
        console.log(response);
        console.log(this.menus);
      }
    );
  }
}
