import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CrearMenuComponent} from './crear-menu/crear-menu.component';
import {Menu} from '../../models/Menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styles: [
  ]
})
export class MenusComponent implements OnInit {

  public menus: Menu[];

  constructor(private ngbModal: NgbModal) {

  }

  ngOnInit(): void {
  }

  openCrearMenu(): void {
    this.ngbModal.open(CrearMenuComponent, {centered: true, size: 'md'})
      .result.then((result) => {
        console.log(result);
    });
  }

}
