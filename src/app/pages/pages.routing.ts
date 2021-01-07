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
      { path: '', component: DashboardComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'sliders', component: SlidersComponent },
      //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
