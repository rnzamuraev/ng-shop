import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { BASE_URL_TOKEN } from "src/app/config";
import { IProduct } from "src/app/shared/types/products";

@Injectable({
  providedIn: "root",
})
export class ProductInfoService {
  // private productId!: number;
  private productId$ = new Subject<number>();

  constructor(private http: HttpClient, @Inject(BASE_URL_TOKEN) private BASE_URL: string) {}

  public getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.BASE_URL}/products/${id}`);
  }

  public get getProductId$() {
    return this.productId$.asObservable();
  }

  public setProductId$(id: number) {
    this.productId$.next(id);
  }
}
