import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventosRouting } from './eventos.routing';
import { EventosComponent } from './eventos.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { CrearEventosComponent } from './crear-eventos/crear-eventos.component';
import { ModificarEventosComponent } from './modificar-eventos/modificar-eventos.component';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    EventosComponent,
    ListaEventosComponent,
    CrearEventosComponent,
    ModificarEventosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    EventosRouting,
    EditorModule
  ]
})
export class EventosModule { }
