import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../../models/Evento';
import { GLOBAL } from '../../services/GLOBAL';
import {Noticia} from '../../models/Noticia';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getEvento(id: number): Observable<Evento> {
    return this._http.get<Evento>(this.url + 'evento/show/' + id);
  }

  getEventos(): Observable<Evento[]> {
    return this._http.get<Evento[]>(this.url + 'evento/list');
  }

  createEvento(eventoForm: Evento): Observable<Evento> {
    return this._http.post<Evento>(this.url + 'evento/register', eventoForm);
  }

  updateEvento(eventoForm: Evento, idEvento: string): Observable<Evento> {
    return this._http.put<Evento>(this.url + 'evento/update/'+idEvento, eventoForm);
  }

  deleteEvento(idEvento: number): Observable<Evento> {
    return this._http.delete<Evento>(this.url + 'evento/delete/'+idEvento);
  }

  modificarEventoImagen(id: string, data: FormData): Observable<Evento> {
    return this._http.post<Evento>(`${this.url}evento/storeimagen/${id}`, data);
  }

  updateStatusEvento(oldStatus: number, idEvento: string): Observable<Evento> {
    let estado = (oldStatus == 1) ? 0 : 1;
    return this._http.put<Evento>(this.url + 'evento/update/'+idEvento, {estado});
  }
}
