import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {BreadcrumbsComponent} from './shared/breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from './shared/header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {SlidersComponent} from './sliders/sliders.component';
import {UrlimagePipe} from '../pipes/urlimage.pipe';
import {PagesRouting} from './pages.routing';

@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    DashboardComponent,
    PagesComponent,
    ConfigurationComponent,
    SlidersComponent,
    UrlimagePipe
  ],
  imports: [
    CommonModule,
    PagesRouting,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  exports: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    DashboardComponent,
    PagesComponent,
    ConfigurationComponent,
    SlidersComponent,
    UrlimagePipe
  ]
})
export class PagesModule {
}
