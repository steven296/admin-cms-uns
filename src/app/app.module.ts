import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRouting} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {PagesModule} from './pages/pages.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
