import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PagesRoutingModule} from './pages/pages.routing';

import {LoginComponent} from './auth/login/login.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {IsLoginGuard} from "./guards/is-login.guard";
import {ConfigurationComponent} from "./pages/configuration/configuration.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {IsAuthenticatedGuard} from "./guards/is-authenticated.guard";

const routes: Routes = [

  {path: 'login', component: LoginComponent, canActivate:[IsAuthenticatedGuard]},
  {path: 'admin/dashboard', component:DashboardComponent, canActivate:[IsLoginGuard]},
  {path: 'admin/configuration', component:ConfigurationComponent, canActivate:[IsLoginGuard]},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
