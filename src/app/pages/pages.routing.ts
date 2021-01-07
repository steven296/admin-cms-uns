import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SlidersComponent } from './sliders/sliders.component';

const routes: Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'configuration', component: ConfigurationComponent, data: { title: 'Configuraciones'}  },
      { path: 'sliders', component: SlidersComponent, data: { title: 'Sliders'}  },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
