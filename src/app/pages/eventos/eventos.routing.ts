import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsLoginGuard } from '../../guards/is-login.guard';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaEventosComponent,
    data: {title: 'Eventos'},
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
export class EventosRouting {
}
