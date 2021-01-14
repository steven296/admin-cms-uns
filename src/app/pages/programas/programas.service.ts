import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Noticia} from '../../models/Noticia';
import {Programa} from '../../models/Programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  uri: string;
  token: string;
  header: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.uri = 'http://localhost:3000/api/programa/';
  }

  refrescarTokenAndHeader(): void {
    this.token = 'Bearer ' + localStorage.getItem('token');

    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    });
  }

  obtenerProgramas(): Observable<Programa[]> {
    this.refrescarTokenAndHeader();
    return this.http.get<Programa[]>(`${this.uri}list`);
  }

  crearPrograma(programa: Programa): Observable<Programa> {
    this.refrescarTokenAndHeader();
    return this.http.post<Programa>(`${this.uri}register`, programa);
  }

  modificarNoticia(programa: Programa): Observable<Programa> {
    this.refrescarTokenAndHeader();
    return this.http.put<Programa>(`${this.uri}update/${programa._id}`, programa);
  }

  modificarProgramaImagen(id: string, data: FormData): Observable<Programa> {
    this.refrescarTokenAndHeader();
    return this.http.post<Programa>(`${this.uri}storeimagen/${id}`, data);
  }

  eliminarPrograma(id: string): Observable<any> {
    this.refrescarTokenAndHeader();
    return this.http.delete<any>(`${this.uri}delete/${id}`);
  }

}
