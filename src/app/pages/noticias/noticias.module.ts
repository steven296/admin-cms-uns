import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoticiasComponent} from './noticias.component';
import {CrearNoticiaComponent} from './crear-noticia/crear-noticia.component';
import {ListaNoticiasComponent} from './lista-noticias/lista-noticias.component';
import {RouterModule} from '@angular/router';
import {NoticiasRouting} from './noticias.routing';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    NoticiasComponent,
    CrearNoticiaComponent,
    ListaNoticiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NoticiasRouting,
    ReactiveFormsModule
  ],
  exports: []
})
export class NoticiasModule {
}
