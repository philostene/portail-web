import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'sort'
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      const aTmp = a[field].toUpperCase();
      const bTmp = b[field].toUpperCase();

      if (aTmp< bTmp) {
        return -1;
      } else if (aTmp > bTmp) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
