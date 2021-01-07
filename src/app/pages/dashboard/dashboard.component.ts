import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth:AuthService
  ) {

  }

  ngOnInit(): void {
  }

  isLogin() {
    if (this.auth.isLogin) {
      return true;
    } else {
      return false;
    }
  }

}
