import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SlidersComponent } from './sliders/sliders.component';


@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    DashboardComponent,
    PagesComponent,
    ConfigurationComponent,
    SlidersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    DashboardComponent,
    PagesComponent,
    ConfigurationComponent,
    SlidersComponent
  ]
})
export class PagesModule { }
