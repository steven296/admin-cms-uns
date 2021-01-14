import {Component, OnInit} from '@angular/core';
import {CrearNoticiaComponent} from './crear-noticia/crear-noticia.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NoticiasService} from './noticias.service';
import {Noticia} from '../../models/Noticia';
import Swal from 'sweetalert2';
import {ModificarNoticiaComponent} from './modificar-noticia/modificar-noticia.component';
import {ModificarImagenComponent} from './modificar-imagen/modificar-imagen.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: []
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[];

  constructor(
    private ngbModal: NgbModal,
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

  openCrearNoticia(): void {
    this.ngbModal.open(CrearNoticiaComponent, {centered: true, size: 'md'})
      .result.then((result) => {
      if (result instanceof Noticia) {
        this.noticiasService.crearNoticia(result).subscribe((noticia: Noticia) => {
          Swal.fire({
            icon: 'success',
            title: 'Creacion de Noticia Exitosa',
            text: `Se ha creado la noticia: ${noticia.titulo} de forma correcta.`,
            width: '40rem',
          }).then(() => {
            this.obtenerNoticias();
          });
        });
      }
    });
  }

  openModificarNoticia(noticia: Noticia): void {
    const modal = this.ngbModal.open(ModificarNoticiaComponent, {centered: true, size: 'md'});
    modal.componentInstance.noticiaPrevia = noticia;
    modal.result.then((result) => {
      console.log(result);
      this.noticiasService.modificarNoticia(result).subscribe((noticiaM: Noticia) => {
        Swal.fire({
          icon: 'success',
          title: 'Modificacion de Noticia Exitosa',
          text: `Se ha creado la noticia: ${noticiaM.titulo} de forma correcta.`,
          width: '40rem',
        }).then(() => {
          this.obtenerNoticias();
        });
      });
    });
  }

  openModificarImagen(noticia: Noticia): void {
    const modal = this.ngbModal.open(ModificarImagenComponent, {centered: true, size: 'md'});
    modal.result.then((result) => {
      console.log(result);
      // this.noticiasService.modificarNoticia(result).subscribe((noticiaM: Noticia) => {
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Modificacion de Noticia Exitosa',
      //     text: `Se ha creado la noticia: ${noticiaM.titulo} de forma correcta.`,
      //     width: '40rem',
      //   }).then(() => {
      //     this.obtenerNoticias();
      //   });
      // });
    });
  }

  eliminarNoticia(id: string): void {
    Swal.fire({
      icon: 'question',
      title: '¿Desea eliminar esta noticia?',
      text: 'Confirme la accion en caso contrario puede cancelarla',
      width: '40rem',
      showCancelButton: true,
      confirmButtonText: 'Eliminar Noticia',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.noticiasService.eliminarNoticia(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Eliminacion Exitosa',
            text: 'Ha eliminado la noticia sin ningun problema',
            width: '40rem',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          }).then(() => {
            this.obtenerNoticias();
          });
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Eliminacion cancelada',
          text: 'Ha cancelado la eliminacion de la noticia',
          width: '40rem',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        }).then();
      }
    });

  }
}
