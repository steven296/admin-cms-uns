import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IsLoginGuard} from '../../guards/is-login.guard';
import {ProgramasComponent} from './programas.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramasComponent,
    data: {title: 'Programas'},
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
export class ProgramasRouting {
}
