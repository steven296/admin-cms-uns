import {Component, OnInit} from '@angular/core';
import {Noticia} from '../../../models/Noticia';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-noticia.component.html',
  styleUrls: []
})
export class ModificarNoticiaComponent implements OnInit{

  noticiaPrevia: Noticia;
  noticiaNueva: Noticia;
  noticiaForm: FormGroup;

  constructor(
    private build: FormBuilder,
    private ngbActiveModal: NgbActiveModal
  ) {
    this.noticiaForm = build.group({
      titulo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]),
      subtitulo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]),
    });
  }

  ngOnInit(): void {
    this.noticiaForm.get('titulo').setValue(this.noticiaPrevia.titulo);
    this.noticiaForm.get('subtitulo').setValue(this.noticiaPrevia.subtitulo);
  }

  modificarNoticia(): void {
    this.noticiaNueva = this.noticiaPrevia;
    this.noticiaNueva.titulo = this.noticiaForm.get('titulo').value;
    this.noticiaNueva.subtitulo = this.noticiaForm.get('subtitulo').value;
    this.ngbActiveModal.close(this.noticiaNueva);
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }

}
