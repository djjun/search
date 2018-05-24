import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtercurrency'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], data: number): any[] {
    if(!items) return [];
    if(!data) return items;

    return items.filter( it => {
      return it.price <= data;
    });
   }
}