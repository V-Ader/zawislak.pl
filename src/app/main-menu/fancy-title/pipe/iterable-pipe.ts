import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'IterablePipe',
  standalone: true
})
export class IterablePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string[] {
    return value.split('');
  }

}
