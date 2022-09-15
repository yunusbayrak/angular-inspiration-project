import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return value.length > 0
      ? value[0].toUpperCase() + value.substring(1, value.length - 1)
      : '';
  }
}
