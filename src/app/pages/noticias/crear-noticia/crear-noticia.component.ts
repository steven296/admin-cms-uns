import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NoticiasService} from '../noticias.service';
import {Noticia} from '../../../models/Noticia';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {

  noticiaForm: FormGroup;
  noticia: Noticia;

  constructor(
    private build: FormBuilder,
    private ngbActiveModal: NgbActiveModal,
    private noticiasService: NoticiasService
  ) {
    this.noticiaForm = build.group({
      titulo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]),
      subtitulo: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]),
    });
  }

  ngOnInit(): void {
  }

  crearNoticia(): void {
    this.noticia = new Noticia();
    this.noticia.titulo = this.noticiaForm.get('titulo').value;
    this.noticia.subtitulo = this.noticiaForm.get('subtitulo').value;
    this.ngbActiveModal.close(this.noticia);
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }
}
