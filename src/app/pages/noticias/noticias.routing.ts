import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IsLoginGuard} from '../../guards/is-login.guard';
import {ListaNoticiasComponent} from './lista-noticias/lista-noticias.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaNoticiasComponent,
    data: {title: 'Lista Noticias'},
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
export class NoticiasRouting {
}
