import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../../models/menu';
import { GLOBAL } from '../../services/GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

}
