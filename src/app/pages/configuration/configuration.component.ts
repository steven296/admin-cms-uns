import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {Configuration} from '../../models/configuration';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styles: []
})
export class ConfigurationComponent implements OnInit {

  public configuration: Configuration;

  constructor(
    private _configurationService: ConfigurationService,
    private authService: AuthService
  ) {
    this.configuration = new Configuration(null, null, null, '', '', null, '', '', '', '', '', '', '', '', null);
    this.getConfiguration();
  }

  ngOnInit(): void {
  }

  onSubmit(configurationForm) {
    this._configurationService.updateConfiguration(configurationForm.value).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  getConfiguration() {
    this._configurationService.getConfiguration().subscribe(
      response => {
        this.configuration = response;
      }
    );
  }

  isLogin() {
    if (this.authService.isLogin) {
      return true;
    } else {
      return false;
    }
  }

}
