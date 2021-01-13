import {Component, OnInit} from '@angular/core';
import {CrearNoticiaComponent} from './crear-noticia/crear-noticia.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {catchError} from 'rxjs/operators';
import {log} from 'util';
import {NoticiasService} from './noticias.service';
import {Noticia} from '../../models/Noticia';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(
    private ngbModal: NgbModal,
    private noticiasService: NoticiasService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  openCrearAula(): void {
    this.ngbModal.open(CrearNoticiaComponent, {centered: true, size: 'md'})
      .result.then((result) => {
      if (result instanceof Noticia) {
        this.noticiasService.crearNoticia(result).subscribe((noticia: Noticia) => {
          console.log(noticia);
        });
      }
    });
  }
}
