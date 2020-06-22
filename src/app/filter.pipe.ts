import { Pipe, PipeTransform } from '@angular/core';
// custom pipe with asyns
@Pipe({
  name: 'filter',
  pure: false // its not recomended. perfomance issue
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
  const resultArray = [];
  if (value.length === 0 || filterString === '') {
    return value;
  }

  for (const item of value) {
    if (item[propName] === filterString) {
          resultArray.push(item);
    }
  }
  return resultArray;
  }

}
