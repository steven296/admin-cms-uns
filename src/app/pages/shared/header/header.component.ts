import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  cerrarSesion() {
    this.authService.logout();
  }

}
