import { Pipe, PipeTransform } from '@angular/core';
import {isObject} from 'util';

@Pipe({
  name: 'toArray',
  pure: false
})
export class ToArrayPipe implements PipeTransform {

  transform (input: Object): Array<any> {
    if (!isObject(input)) {
      return [];
    }
    return Object.keys(input).map((value) => input[value]);
  }

}
