import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../../models/Menu';
import { GLOBAL } from '../../services/GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getMenu(id: number): Observable<any> {
    return this._http.get(this.url + 'menu/show/' + id);
  }

  getMenus(): Observable<any> {
    return this._http.get(this.url + 'menu/list');
  }

  createMenu(menuForm: Menu): Observable<any> {
    return this._http.post(this.url + 'menu/register', menuForm);
  }

  updateMenu(menuForm: Menu, idMenu: number): Observable<any> {
    return this._http.put(this.url + 'menu/update/'+idMenu, menuForm);
  }

  deleteMenu(idMenu: number): Observable<any> {
    return this._http.delete(this.url + 'menu/delete/'+idMenu);
  }
}
