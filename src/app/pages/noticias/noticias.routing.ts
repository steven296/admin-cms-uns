import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IsLoginGuard} from '../../guards/is-login.guard';
import {NoticiasComponent} from './noticias.component';

const routes: Routes = [
  {
    path: '',
    component: NoticiasComponent,
    data: {title: 'Noticias'},
    canActivate: [IsLoginGuard]
  },
  {
    path: '**',
    redirectTo: '',
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
