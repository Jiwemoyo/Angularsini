import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formathour',
  standalone: true
})
export class FormathourPipe implements PipeTransform {

  transform(value: unknown): string {
    if (!value) return '';

    const date = new Date(value as string);
    const h = this.pad(date.getHours());
    const m = this.pad(date.getMinutes());
    const s = this.pad(date.getSeconds());

    return `${h}:${m}:${s}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }

}
