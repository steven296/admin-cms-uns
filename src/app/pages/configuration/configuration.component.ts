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
  public uploadedFavicon: File;
  public uploadedLogo: File;
  public uploadedPortada: File;

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

  onFaviconChange(event) {
    this.uploadedFavicon = event.target.files[0];
  }

  onFaviconSubmit() {
    let formData = new FormData();
    formData.append("imagen", this.uploadedFavicon, this.uploadedFavicon.name);

    this._configurationService.updateFavicon(formData).subscribe(
      response => {
        this.configuration.favicon = response.favicon;
      }
    );
  }

  onLogoChange(event) {
    this.uploadedLogo = event.target.files[0];
  }

  onLogoSubmit() {
    let formData = new FormData();
    formData.append("imagen", this.uploadedLogo, this.uploadedLogo.name);

    this._configurationService.updateLogo(formData).subscribe(
      response => {
        this.configuration.logo = response.logo;
      }
    );
  }

  onPortadaChange(event) {
    this.uploadedPortada = event.target.files[0];
  }

  onPortadaSubmit() {
    let formData = new FormData();
    formData.append("imagen", this.uploadedPortada, this.uploadedPortada.name);

    this._configurationService.updatePortada(formData).subscribe(
      response => {
        this.configuration.portada = response.portada;
      }
    );
  }
}
