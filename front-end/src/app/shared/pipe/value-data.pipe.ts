import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueData'
})
export class ValueDataPipe implements PipeTransform {

  transform(value: any): any {

    if (value) {
      console.log('------ Printing keys -------');
      for (let x in value) {
        console.log("key: ", x, ", value:", value[x]);
      }
    }
    return null;
  }

}
