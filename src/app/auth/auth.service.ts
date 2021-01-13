import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri: string = 'http://localhost:3000/api/user/login';
  private _isLogin: boolean;

  constructor(
    private http: HttpClient
  ) {

  }

  login(user: user) {
    return this.http.post(`${this.uri}`, user);
  }

  get isLogin(): boolean {
    if (localStorage.getItem('token')) {
      this._isLogin = true;
      return this._isLogin;
    } else {
      this._isLogin = false;
      return this._isLogin;
    }
  }
}

export interface user {
  email: string;
  password: string;
}
