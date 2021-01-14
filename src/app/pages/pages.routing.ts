import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {SlidersComponent} from './sliders/sliders.component';
import {IsLoginGuard} from '../guards/is-login.guard';
import {NoticiasComponent} from './noticias/noticias.component';
import {ListaNoticiasComponent} from './noticias/lista-noticias/lista-noticias.component';
import {MenusComponent} from './menus/menus.component';
import {ListaMenusComponent} from './menus/lista-menus/lista-menus.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {title: 'Dashboard'},
    canActivate: [IsLoginGuard]
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    data: {title: 'Configuraciones'},
    canActivate: [IsLoginGuard]
  },
  {
    path: 'sliders',
    component: SlidersComponent,
    data: {title: 'Sliders'},
    canActivate: [IsLoginGuard]
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    loadChildren: () => import('./noticias/noticias.module').then(mod => mod.NoticiasModule),
    data: {title: 'Noticias'},
    canActivate: [IsLoginGuard]
  },
  {
    path: 'menus',
    component: MenusComponent,
    loadChildren: () => import('./menus/menus.module').then(mod => mod.MenusModule),
    data: {title: 'Menus'},
    canActivate: [IsLoginGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRouting {
}
