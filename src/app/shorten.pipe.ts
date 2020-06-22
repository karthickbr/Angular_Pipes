import { Pipe, PipeTransform } from '@angular/core';
// custom pipe
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, limits: number) {
    if (value.length > limits) {
      return value.substr(0, limits) + ' ...';
    }
     return value;
  }
}
