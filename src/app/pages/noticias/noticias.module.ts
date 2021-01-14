import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoticiasComponent} from './noticias.component';
import {CrearNoticiaComponent} from './crear-noticia/crear-noticia.component';
import {RouterModule} from '@angular/router';
import {NoticiasRouting} from './noticias.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ModificarNoticiaComponent} from './modificar-noticia/modificar-noticia.component';
import {ModificarImagenComponent} from './modificar-imagen/modificar-imagen.component';


@NgModule({
  declarations: [
    NoticiasComponent,
    CrearNoticiaComponent,
    ModificarNoticiaComponent,
    ModificarImagenComponent
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
