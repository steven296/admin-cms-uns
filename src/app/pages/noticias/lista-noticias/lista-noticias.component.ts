import {Component, OnInit} from '@angular/core';
import {NoticiasService} from '../noticias.service';
import {Noticia} from '../../../models/Noticia';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  noticias: Noticia[];

  constructor(
    private noticiasService: NoticiasService
  ) {
  }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias(): void {
    this.noticiasService.obtenerNoticias().subscribe((noticias: Noticia[]) => {
      this.noticias = noticias;
    });
  }

}
