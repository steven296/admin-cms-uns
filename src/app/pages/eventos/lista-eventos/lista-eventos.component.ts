import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventosService } from '../eventos.service';
import { Evento } from '../../../models/Evento';
import Swal from 'sweetalert2';
import { CrearEventosComponent } from '../crear-eventos/crear-eventos.component';
import { ModificarEventosComponent } from '../modificar-eventos/modificar-eventos.component';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styles: [
  ]
})
export class ListaEventosComponent implements OnInit {

  public eventos: Evento[];

  constructor(private _eventosService: EventosService, private ngbModal: NgbModal) {
    this.getEventos();
  }

  ngOnInit(): void {
  }

  getEventos() {
    this._eventosService.getEventos().subscribe(
      response => {
        this.eventos = response;
      }
    );
  }

  openCreateEvento(): void {
    this.ngbModal.open(CrearEventosComponent, {centered: true, size: 'md'})
      .result.then((result) => {
        this.getEventos();
    });
  }

  deleteEvento(id): void {
    Swal.fire({
      icon: 'question',
      title: '¿Desea eliminar este Evento?',
      text: 'Confirme la accion en caso contrario puede cancelarla',
      width: '40rem',
      showCancelButton: true,
      confirmButtonText: 'Eliminar Evento',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._eventosService.deleteEvento(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Eliminacion Exitosa',
            text: 'Ha eliminado el evento con exito.',
            width: '30rem',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
          }).then(() => {
            this.getEventos();
          });
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Eliminacion cancelada',
          text: 'Ha cancelado la eliminacion del evento',
          width: '30rem',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        }).then();
      }
    });
  }

  openEditEvento(evento): void {
    const modal = this.ngbModal.open(ModificarEventosComponent, {centered: true, size: 'md'})
    modal.componentInstance.evento = evento;
    modal.componentInstance.id = evento._id;
    modal.result.then((result) => {
        this.getEventos();
    });
  }
}
