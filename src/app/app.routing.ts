import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {IsLoginGuard} from './guards/is-login.guard';
import {IsAuthenticatedGuard} from './guards/is-authenticated.guard';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent, canActivate: [IsAuthenticatedGuard]},
  {
    path: 'admin',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouting {
}
