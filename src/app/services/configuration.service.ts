import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../models/configuration';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getConfiguration(): Observable<any> {
    return this._http.get(this.url + 'config/show');
  }

  updateConfiguration( configurationForm: Configuration ): Observable<any> {
    return this._http.put(this.url + 'config/update', configurationForm);
  }

  updateFavicon(formData) {
    return this._http.post(this.url + 'config/storeimagen/favicon', formData);
  }
}
