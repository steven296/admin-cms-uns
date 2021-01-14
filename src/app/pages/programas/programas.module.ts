import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgramasComponent} from './programas.component';
import {CrearProgramaComponent} from './crear-programa/crear-programa.component';
import {RouterModule} from '@angular/router';
import {ProgramasRouting} from './programas.routing';
import {ReactiveFormsModule} from '@angular/forms';
import {ModificarProgramaComponent} from './modificar-programa/modificar-programa.component';
import {ModificarImagenComponent} from './modificar-imagen/modificar-imagen.component';


@NgModule({
  declarations: [
    ProgramasComponent,
    CrearProgramaComponent,
    ModificarProgramaComponent,
    ModificarImagenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProgramasRouting,
    ReactiveFormsModule
  ],
  exports: []
})
export class ProgramasModule {
}
