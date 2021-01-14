import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IsLoginGuard} from '../../guards/is-login.guard';
import {ListaMenusComponent} from './lista-menus/lista-menus.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaMenusComponent,
    data: {title: 'Lista de Menus'},
    canActivate: [IsLoginGuard]
  },
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenusRouting {
}
