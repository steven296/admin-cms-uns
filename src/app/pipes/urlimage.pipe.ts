import { Pipe, PipeTransform } from '@angular/core';
import { GLOBAL } from '../services/GLOBAL';

@Pipe({
  name: 'urlimage'
})
export class UrlimagePipe implements PipeTransform {

  private url = GLOBAL.url;

  transform(value: string, args?: string): string {

    if (args != null) {
      return this.url + args + "/" + value;
    }
    return value;
  }

}
