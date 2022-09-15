import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binaryNumber',
  standalone: true,
})
export class BinaryNumberPipe implements PipeTransform {
  transform(value: string) {
    return value.length > 0
      ? value
          .split('')
          .map(c => c.charCodeAt(0).toString(2))
          .join(' ')
      : '';
  }
}
