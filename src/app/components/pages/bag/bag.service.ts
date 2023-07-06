import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { IProduct } from "src/app/shared/types/products";

@Injectable({
  providedIn: "root",
})
export class BagService implements OnInit {
  private bagKey = "_bag_";
  private count!: number;
  private count$ = new Subject<number>();
  private bag: IProduct[] = [];
  private bag$ = new Subject<IProduct[]>();

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {}

  public getLocalStorage() {
    const bag = this.localStorage.get(this.bagKey);
    console.log(bag);
    if (bag === null) return;

    return bag;
  }

  public get getCount() {
    return this.count;
  }
  public get getCount$() {
    return this.count$.asObservable();
  }
  public setCount$(num: number) {
    this.count += num;
    this.count$.next(num);
  }

  public get getBag() {
    return this.bag;
  }
  public get getBag$() {
    return this.bag$.asObservable();
  }
  public setBag$(prod: IProduct) {
    this.bag.push(prod);
    this.bag$.next(this.bag);
  }
}
