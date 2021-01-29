import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ConfigurationService} from '../../services/configuration.service';
import {Configuration} from '../../models/configuration';
import {AuthService} from "../../auth/auth.service";
import Swal from 'sweetalert2';

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
  public sections: string[];
  public faviconTemp: String | ArrayBuffer;
  public logoTemp: String | ArrayBuffer;
  public portadaTemp: String | ArrayBuffer;

  @ViewChild('fileInput', {static: false}) myFileInput: ElementRef;

  constructor(
    private _configurationService: ConfigurationService,
    private authService: AuthService
  ) {
    this.configuration = new Configuration(null, null, null, null, null, '', '', null, '', '', '', '', '', '', '', '', null);
    this.getConfiguration();
  }

  ngOnInit(): void {
  }

  onSubmit(configurationForm) {
    this._configurationService.updateConfiguration(configurationForm.value).subscribe(
      response => {
        console.log(response);
        Swal.fire(
          'Exito!',
          'La configuracion se actualizo correctamente!',
          'success'
        );
      }
    )
  }

  getConfiguration() {
    this._configurationService.getConfiguration().subscribe(
      response => {
        this.configuration = response;
        this.sections = this.configuration.secciones;
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

  /*
  * Favicon Imagen
  */
  onFaviconChange(event) {
    this.uploadedFavicon = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(this.uploadedFavicon);
    reader.onloadend = () => this.faviconTemp= reader.result;
  }

  onFaviconSubmit() {
    let formData = new FormData();
    formData.append("imagen", this.uploadedFavicon, this.uploadedFavicon.name);

    this._configurationService.updateFavicon(formData).subscribe(
      response => {
        Swal.fire(
          'Exito!',
          'Se actualizo el Favicon correctamente!',
          'success'
        );
      }
    );
  }

  /*
  * Logo Imagen
  */
  onLogoChange(event) {
    this.uploadedLogo = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(this.uploadedLogo);
    reader.onloadend = () => this.logoTemp= reader.result;
  }

  onLogoSubmit() {
    let formData = new FormData();
    formData.append("imagen", this.uploadedLogo, this.uploadedLogo.name);

    this._configurationService.updateLogo(formData).subscribe(
      response => {
        Swal.fire(
          'Exito!',
          'Se actualizo el Logo correctamente!',
          'success'
        );
      }
    );
  }

  /*
  * Portada Imagen
  */
  onPortadaChange(event) {
      this.uploadedPortada = event.target.files[0];

      let reader = new FileReader();
      const max_height = 800;
      const max_width = 256;
      reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                if (img_height > max_height && img_width > max_width) {
                  Swal.fire(
                    'Error!',
                    'la dimension maxima permitida es: ' + max_height + '*' + max_width + 'px',
                    'error'
                  );
                  this.myFileInput.nativeElement.value = '';
                  this.uploadedPortada = null;
                  return false;
                } else {
                  this.portadaTemp= reader.result;
                }
            };
      };
      reader.readAsDataURL(this.uploadedPortada);
  }

  onPortadaSubmit() {
    let formData = new FormData();
    formData.append("imagen", this.uploadedPortada, this.uploadedPortada.name);

    this._configurationService.updatePortada(formData).subscribe(
      response => {
        Swal.fire(
          'Exito!',
          'Se actualizo la Portada correctamente!',
          'success'
        );
        this.myFileInput.nativeElement.value = '';
        this.uploadedPortada = null;
      }
    );
  }

  /*
  * CHECKBOX DE SERVICIOS
  */
  changeSeccion(seccion) {
    if (this.sections.includes(seccion)) {
      var i = this.sections.indexOf(seccion);
      this.sections.splice(i,1);
    } else {
      this.sections.push(seccion);
    }
  }
}
