import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventosService } from '../eventos.service';
import { Evento } from '../../../models/Evento';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-crear-eventos',
  templateUrl: './crear-eventos.component.html',
  styles: [
  ]
})
export class CrearEventosComponent implements OnInit {

  public evento: Evento;
  public apiKey: string;

  constructor(private ngbActiveModal: NgbActiveModal, private _eventosService: EventosService) {
    this.apiKey = environment.tinykey;
    this.evento = new Evento();
  }

  ngOnInit(): void {
  }

  crearEvento(eventoForm) {
    this._eventosService.createEvento(eventoForm.value).subscribe(
      response => {
        Swal.fire(
          'Evento Creado con Exito!',
          'Se ha creado el evento con exito.',
          'success'
        );
        this.evento = response;
        this.ngbActiveModal.close(this.evento);
      }
    );
  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }
}
