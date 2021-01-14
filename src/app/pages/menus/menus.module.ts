import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListaMenusComponent} from './lista-menus/lista-menus.component';
import {MenusComponent} from './menus.component';
import {RouterModule} from '@angular/router';
import {MenusRouting} from './menus.routing';
import {CrearMenuComponent} from './crear-menu/crear-menu.component';
import { ModificarMenuComponent } from './modificar-menu/modificar-menu.component';


@NgModule({
  declarations: [
    MenusComponent,
    ListaMenusComponent,
    CrearMenuComponent,
    ModificarMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MenusRouting
  ]
})
export class MenusModule {
}
