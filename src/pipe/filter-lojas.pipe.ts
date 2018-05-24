import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterlojas'
})
export class FilterLojas implements PipeTransform {
  transform(items: any[], data: any): any[] {

    console.log(data);
    if(!items) return [];
    if(!data) return items;


    // return items.filter( it => {
    //   return it.store <= data;
    // });
   }
}