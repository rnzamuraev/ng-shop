import { Location } from "@angular/common";
import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { EMPTY, catchError } from "rxjs";
import { IProduct } from "../../types/products";
import { ProductInfoService } from "./product-info.service";

export const productInfoResolver: ResolveFn<IProduct> = (
  route: ActivatedRouteSnapshot
  // state: RouterStateSnapshot
) => {
  const productInfoService = ProductInfoService;
  const location = Location;
  console.log(route.params);
  console.log(route.params?.["id"]);
  console.log(productInfoService.prototype);
  console.log(productInfoService.prototype.getProduct(13));

  return productInfoService.prototype.getProduct(route.params?.["id"]).pipe(
    catchError(() => {
      location.prototype.back();
      return EMPTY;
    })
  );
};
