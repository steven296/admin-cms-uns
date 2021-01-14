import {Component, OnInit} from '@angular/core';
import {Noticia} from '../../../models/Noticia';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Programa} from '../../../models/Programa';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-programa.component.html',
  styleUrls: []
})
export class ModificarProgramaComponent implements OnInit{

  programaPrevio: Programa;
  programaNuevo: Programa;
  programaForm: FormGroup;

  constructor(
    private build: FormBuilder,
    private ngbActiveModal: NgbActiveModal
  ) {
    this.programaForm = build.group({
      titulo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]),
    });
  }

  ngOnInit(): void {
    this.programaForm.get('titulo').setValue(this.programaPrevio.titulo);
  }

  modificarNoticia(): void {
    this.programaNuevo = this.programaPrevio;
    this.programaNuevo.titulo = this.programaForm.get('titulo').value;
    this.ngbActiveModal.close(this.programaNuevo);
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }

}
