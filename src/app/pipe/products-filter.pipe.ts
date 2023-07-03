import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../shared/types/products";

@Pipe({
  name: "productsFilter",
})
export class ProductsFilterPipe implements PipeTransform {
  public transform(
    products: IProduct[],
    title: string,
    min: number | string,
    max: number | string,
    filterMaxRange: number
  ): IProduct[] {
    console.log("filter");
    if (!products.length) return products;

    if (title || min || max) {
      if (!max) {
        max = filterMaxRange;
      }
      return products.filter(
        el =>
          el.title.toLowerCase().includes(title.toLowerCase()) &&
          +min <= el.price &&
          el.price <= +max
      );
    }
    return products;
  }
}
//  public productsFilter(
//     arr: IProduct[],
// title: string,
// min: number,
// max: number
//   ) {
//     console.log('filter');
//     if (!arr.length) return;

//     if (title || min > 0 || max > 0) {
//       if (!max) {
//         max = this.filterRange.max;
//       }
//       const newArr = arr.filter(
//         (el) =>
//           el.title.toLowerCase().includes(title.toLowerCase()) &&
//           min <= el.price &&
//           el.price <= max
//       );
//       return newArr;
//     }
//     return arr;
//   }
