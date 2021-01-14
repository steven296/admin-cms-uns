import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Noticia} from '../../models/Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  uri: string;
  token: string;
  header: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.uri = 'http://localhost:3000/api/noticia/';
  }

  refrescarTokenAndHeader(): void {
    this.token = 'Bearer ' + localStorage.getItem('token');

    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    });
  }

  obtenerNoticias(): Observable<Noticia[]> {
    this.refrescarTokenAndHeader();
    return this.http.get<Noticia[]>(`${this.uri}list`);
  }

  crearNoticia(noticia: Noticia): Observable<Noticia> {
    this.refrescarTokenAndHeader();
    return this.http.post<Noticia>(`${this.uri}register`, noticia);
  }

  modificarNoticia(noticia: Noticia): Observable<Noticia> {
    this.refrescarTokenAndHeader();
    return this.http.put<Noticia>(`${this.uri}update/${noticia._id}`, noticia);
  }

  modificarNoticiaImagen(id: string, data: FormData): Observable<Noticia> {
    this.refrescarTokenAndHeader();
    return this.http.post<Noticia>(`${this.uri}storeimagen/${id}`, data);
  }

  eliminarNoticia(id: string): Observable<any> {
    this.refrescarTokenAndHeader();
    return this.http.delete<any>(`${this.uri}delete/${id}`);
  }

}
