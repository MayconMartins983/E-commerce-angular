import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valor',
})
export class ValorPipe implements PipeTransform {
  transform(value: number | string): string {

    if (typeof value === 'number') {
      return 'R$ ' + value.toFixed(2).replace('.', ',');
    }

    return value.toString();
  }
}
