import {Component, OnInit} from '@angular/core';
import {CrearProgramaComponent} from './crear-programa/crear-programa.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProgramasService} from './programas.service';
import {Noticia} from '../../models/Noticia';
import Swal from 'sweetalert2';
import {ModificarProgramaComponent} from './modificar-programa/modificar-programa.component';
import {ModificarImagenComponent} from './modificar-imagen/modificar-imagen.component';
import {Programa} from '../../models/Programa';

@Component({
  selector: 'app-noticias',
  templateUrl: './programas.component.html',
  styleUrls: []
})
export class ProgramasComponent implements OnInit {

  programas: Programa[];

  constructor(
    private ngbModal: NgbModal,
    private programasService: ProgramasService
  ) {
  }

  ngOnInit(): void {
    this.obtenerProgramas();
  }

  obtenerProgramas(): void {
    this.programasService.obtenerProgramas().subscribe((programas: Programa[]) => {
      this.programas = programas;
    });
  }

  openCrearNoticia(): void {
    this.ngbModal.open(CrearProgramaComponent, {centered: true, size: 'lg', backdrop: 'static'})
      .result.then((result) => {
      if (result instanceof Noticia) {
        this.programasService.crearPrograma(result).subscribe((programa: Programa) => {
          Swal.fire({
            icon: 'success',
            title: 'Creacion de Programa Exitoso',
            text: `Se ha creado el programa: ${programa.titulo} de forma correcta.`,
            width: '40rem',
          }).then(() => {
            this.obtenerProgramas();
          });
        });
      }
    });
  }

  openModificarPrograma(programa: Programa): void {
    const modal = this.ngbModal.open(ModificarProgramaComponent, {centered: true, size: 'lg', backdrop: 'static'});
    modal.componentInstance.programaPrevio = programa;
    modal.result.then((result) => {
      if (result != undefined || result != null) {
        this.programasService.modificarNoticia(result).subscribe((programaM: Noticia) => {
          Swal.fire({
            icon: 'success',
            title: 'Modificacion de Programa Exitosa',
            text: `Se ha modificado el programa: ${programaM.titulo} de forma correcta.`,
            width: '40rem',
          }).then(() => {
            this.obtenerProgramas();
          });
        });
      }
    });
  }

  openModificarImagen(programa: Programa): void {
    const modal = this.ngbModal.open(ModificarImagenComponent, {centered: true, size: 'lg', backdrop: 'static'});
    modal.result.then((result) => {
      if (result != undefined || result != null) {
        let formData: FormData = new FormData();
        formData.append('imagen', result);

        this.programasService.modificarProgramaImagen(programa._id, formData).subscribe((programaM: Noticia) => {
          Swal.fire({
            icon: 'success',
            title: 'Modificacion de Imagen',
            text: `Se ha modificado la imagen del programa: ${programaM.titulo} de forma correcta.`,
            width: '40rem',
          }).then(() => {
            this.obtenerProgramas();
          });
        });
      }
    });
  }

  eliminarPrograma(id: string): void {
    Swal.fire({
      icon: 'question',
      title: '¿Desea eliminar este Programa?',
      text: 'Confirme la accion en caso contrario puede cancelarla',
      width: '40rem',
      showCancelButton: true,
      confirmButtonText: 'Eliminar Programa',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.programasService.eliminarPrograma(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Eliminacion Exitosa',
            text: 'Ha eliminado la noticia sin ningun problema',
            width: '40rem',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          }).then(() => {
            this.obtenerProgramas();
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
