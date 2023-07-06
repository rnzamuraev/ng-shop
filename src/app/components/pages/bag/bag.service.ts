import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IProduct } from "src/app/shared/types/products";

@Injectable({
  providedIn: "root",
})
export class BagService {
  private count = 0;
  private count$ = new Subject<number>();
  private bag: IProduct[] = [];
  private bag$ = new Subject<IProduct[]>();

  constructor() {}

  public get getCount() {
    return this.count;
  }
  public get getCount$() {
    return this.count$.asObservable();
  }
  public setCount$(num: number) {
    return this.count$.next(num);
  }

  public get getBag() {
    return this.bag;
  }
  public get getBag$() {
    return this.bag$.asObservable();
  }
  public setBag$(prod: IProduct[]) {
    return this.bag$.next(prod);
  }
}
