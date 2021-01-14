import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri: string = 'http://localhost:3000/api/user/login';
  private _isLogin: boolean;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  login(user: user) {
    return this.http.post(`${this.uri}`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login').then();
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
