import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFilter'
})
export class FormatFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var reg = /^\d+$/;
    if(reg.test(value)){ return '#'+value }
    return value;
  }

}
