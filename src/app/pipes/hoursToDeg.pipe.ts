import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'htodeg',
  pure: false
})
export class HoursToDeg implements PipeTransform {
  transform(hours: number): number {
    return hours * 15;
  }
}