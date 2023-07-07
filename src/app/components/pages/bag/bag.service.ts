import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { EPagesKey } from "../types/pages.enum";
import { IBag, IProductBag } from "./types/bag.interface";

@Injectable({
  providedIn: "root",
})
export class BagService implements OnInit {
  private initBag: IBag = {
    bagProducts: [],
    totalQuantity: 0,
  };
  private totalQuantity!: number;
  private totalQuantity$ = new Subject<number>();
  private bagProducts: IProductBag[] = [];
  private bagProducts$ = new Subject<IProductBag[]>();
  private bag!: IBag;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {}

  public getLocalStorage(): IBag {
    const bag: IBag | null = this.localStorage.get(EPagesKey.BAG);
    console.log(bag);
    if (bag === null) return this.initBag;

    return bag;
  }
  public setBagToLocalStorage(): void {
    this.bag = {
      bagProducts: this.bagProducts,
      totalQuantity: this.totalQuantity,
    };

    this.localStorage.set(EPagesKey.BAG, this.bag);
  }

  public get getTotalQuantity(): number {
    return this.totalQuantity;
  }
  public get getTotalQuantity$(): Observable<number> {
    return this.totalQuantity$.asObservable();
  }
  public setTotalQuantity$(num: number): void {
    this.totalQuantity = num;
    this.totalQuantity$.next(num);
    console.log(this.totalQuantity);
  }

  public get getBagProducts() {
    return this.bagProducts;
  }
  public get getBagProducts$() {
    return this.bagProducts$.asObservable();
  }
  public setBagProducts$(prod: IProductBag) {
    this.bagProducts.unshift(prod);
    this.bagProducts$.next(this.bagProducts);
    console.log(this.bag);
  }
}
