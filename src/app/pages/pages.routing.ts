import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {SlidersComponent} from './sliders/sliders.component';
import {IsLoginGuard} from '../guards/is-login.guard';
import {NoticiasComponent} from './noticias/noticias.component';
import {MenusComponent} from './menus/menus.component';
import {ProgramasComponent} from './programas/programas.component';
import {EventosComponent} from './eventos/eventos.component';

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
    path: 'programas',
    component: ProgramasComponent,
    loadChildren: () => import('./programas/programas.module').then(mod => mod.ProgramasModule),
    data: {title: 'Programas'},
    canActivate: [IsLoginGuard]
  },
  {
    path: 'eventos',
    component: EventosComponent,
    loadChildren: () => import('./eventos/eventos.module').then(mod => mod.EventosModule),
    data: {title: 'Eventos'},
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
