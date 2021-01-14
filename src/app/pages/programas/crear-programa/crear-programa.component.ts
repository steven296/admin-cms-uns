import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Noticia} from '../../../models/Noticia';
import {Programa} from '../../../models/Programa';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-programa.component.html',
  styleUrls: []
})
export class CrearProgramaComponent {

  programaForm: FormGroup;
  programa: Programa;

  constructor(
    private build: FormBuilder,
    private ngbActiveModal: NgbActiveModal
  ) {
    this.programaForm = build.group({
      titulo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]),
    });
  }

  crearNoticia(): void {
    this.programa = new Noticia();
    this.programa.titulo = this.programaForm.get('titulo').value;
    this.ngbActiveModal.close(this.programa);
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }
}
