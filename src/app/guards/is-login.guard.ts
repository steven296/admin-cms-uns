import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLogin) {
      console.log("hola")
      return true;
    } else {
      console.log("adios")
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      }).then();
      return false;
    }

  }
}
