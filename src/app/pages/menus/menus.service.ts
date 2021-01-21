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

  getMenu(id: number): Observable<Menu> {
    return this._http.get<Menu>(this.url + 'menu/show/' + id);
  }

  getMenus(): Observable<Menu[]> {
    return this._http.get<Menu[]>(this.url + 'menu/list');
  }

  createMenu(menuForm: Menu): Observable<Menu> {
    return this._http.post<Menu>(this.url + 'menu/register', menuForm);
  }

  updateMenu(menuForm: Menu, idMenu: number): Observable<Menu> {
    return this._http.put<Menu>(this.url + 'menu/update/'+idMenu, menuForm);
  }

  deleteMenu(idMenu: number): Observable<Menu> {
    return this._http.delete<Menu>(this.url + 'menu/delete/'+idMenu);
  }

  updateStatusMenu(oldStatus: number, idMenu: number): Observable<Menu> {
    let status = (oldStatus == 1) ? 0 : 1;
    return this._http.put<Menu>(this.url + 'menu/update/'+idMenu, {status});
  }
}
