import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { Configuration } from '../../models/configuration';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styles: [
  ]
})
export class ConfigurationComponent implements OnInit {

  public configuration: Configuration;

  constructor(private _configurationService: ConfigurationService) {
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

}
