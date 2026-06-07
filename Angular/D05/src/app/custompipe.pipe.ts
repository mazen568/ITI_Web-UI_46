import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let newValue = value.split('').join(',');
    return newValue;
  }

}