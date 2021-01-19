import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventosService } from '../eventos.service';
import { Evento } from '../../../models/Evento';

@Component({
  selector: 'app-modificar-eventos',
  templateUrl: './modificar-eventos.component.html',
  styles: [
  ]
})
export class ModificarEventosComponent implements OnInit {

  public evento: Evento;
  public newEvento: Evento;
  public id: string;

  constructor(private _eventosService: EventosService, private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  updateEvento(eventoForm): void {
    this._eventosService.updateEvento(eventoForm.value, this.id).subscribe(
      response => {
        this.evento = response;
        this.ngbActiveModal.close(this.evento);
      }
    );

  }

  cerrarModal(): void {
    this.ngbActiveModal.close();
  }

}
