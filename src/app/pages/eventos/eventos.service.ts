import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../../models/Evento';
import { GLOBAL } from '../../services/GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getEvento(id: number): Observable<any> {
    return this._http.get(this.url + 'evento/show/' + id);
  }

  getEventos(): Observable<any> {
    return this._http.get(this.url + 'evento/list');
  }

  createEvento(eventoForm: Evento): Observable<any> {
    return this._http.post(this.url + 'evento/register', eventoForm);
  }

  updateEvento(eventoForm: Evento, idEvento: string): Observable<any> {
    return this._http.put(this.url + 'evento/update/'+idEvento, eventoForm);
  }

  deleteEvento(idEvento: number): Observable<any> {
    return this._http.delete(this.url + 'evento/delete/'+idEvento);
  }
}
