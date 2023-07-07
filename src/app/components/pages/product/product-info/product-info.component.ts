import { Location } from "@angular/common";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, of } from "rxjs";

import { Router } from "@angular/router";
import { HomeService } from "src/app/components/pages/home/home.service";
import { ProductInfoService } from "src/app/components/pages/product/product-info/product-info.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { IProduct } from "src/app/shared/types/products";
import { BagService } from "../../bag/bag.service";
import { EProduct } from "../types/product.enum";

@Component({
  selector: "shop-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.scss"],
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  public addToBag = EProduct.ADD_TO_BAG;
  public goToBag = EProduct.GO_TO_BAG;
  public addFavorites = EProduct.ADD_TO_FAVORITES;
  public removeFavorites = EProduct.REMOVE_fROM_FAVORITES;
  public favoritesBtnTextContent = EProduct.ADD_TO_FAVORITES;
  public bagBtnTextContent = EProduct.ADD_TO_BAG;
  public Black = "black";
  @Input()
  public myProduct!: IProduct;
  // public myColor: IProductColor[] = [];
  // public mySize: IProductSize[] = [];
  // public isBagBtnCondition = false;
  public isColorCondition!: boolean;
  public myFavorites!: IProduct[];

  private isFavoritesBtnCondition = false;
  private totalQuantity!: number;
  private quantity = 0;
  // public isWidth!: boolean;

  public productId!: number;
  public unsubscribeProductId$!: Subscription;
  public unsubscribeWindowWidth$!: Subscription;

  public radioBtnColor = [
    { color: "red", isColor: true },
    { color: "blue", isColor: false },
    { color: "green", isColor: false },
  ];
  public radioBtnSize = [
    { size: "4.5", isSize: true },
    { size: "5", isSize: false },
    { size: "6.5", isSize: false },
  ];
  public myProductColorName = "";
  public myProductSize = "";

  public getData(arr: IProduct[]): Observable<IProduct[]> {
    return of(arr);
  }

  constructor(
    // private productsService: ProductsService,
    private location: Location,
    private productInfoService: ProductInfoService,
    private homeService: HomeService,
    private localStorage: LocalStorageService,
    private bagService: BagService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.totalQuantity = this.bagService.getTotalQuantity;
    // this.widthWindow = window.innerWidth;
    // this.setIsWidth();
    // this.subscribeWindowWidth$();
    // *********
    //   this.localStorage.getData().forEach(el => {
    //     if (el.id === this.myProduct.id) {
    //       this.setIsBtnCondition();
    //     }
    //   });
    // });
    // ********
    this.setQuantity();
  }

  private setQuantity() {
    this.bagService.getBagProducts.forEach(prod => {
      if (
        prod.id === this.myProduct.id &&
        prod.colorName === this.myProductColorName &&
        prod.size === this.myProductSize
      ) {
        this.quantity = prod.quantity;
      }
    });
    this.setBagBtnTextContent();
  }
  private setBagBtnTextContent() {
    if (this.quantity === 0) this.bagBtnTextContent = this.addToBag;
    else this.bagBtnTextContent = this.goToBag;
  }

  private setFavoritesBtnTextContent() {
    if (this.isFavoritesBtnCondition) this.favoritesBtnTextContent = this.addFavorites;
    else this.favoritesBtnTextContent = this.removeFavorites;

    this.isFavoritesBtnCondition = !this.isFavoritesBtnCondition;
  }
  public onToggleFavorites(el: IProduct) {
    this.setFavoritesBtnTextContent();

    if (this.isFavoritesBtnCondition) this.localStorage.addFavorites(el);
    else this.localStorage.removeFavorites(el);
  }

  // public onToggleBag() {
  //   this.setIsFavoritesBtnCondition();
  // }

  public onBackToShop() {
    this.location.back();
  }

  public onColorChangeHandler(val: string) {}

  public onColorChecked(value: string) {
    console.log(value);

    this.radioBtnColor.forEach(color => {
      color.isColor = false;

      if (color.color !== value) return;

      console.log("value: ", value);
      color.isColor = true;

      this.myProductColorName = color.color;
    });
  }

  public onSizeChecked(value: string) {
    this.radioBtnSize.forEach(size => {
      size.isSize = false;
      if (size.size !== value) return;

      console.log("value: ", value);
      size.isSize = true;

      this.myProductSize = value;
    });
  }

  private setTotalQuantity() {
    console.log(this.totalQuantity);
    this.totalQuantity = this.totalQuantity + 1;
    console.log(this.totalQuantity);
  }

  public onAddToBag() {
    if (this.quantity === 1) {
      this.router.navigate(["/bag"]);
      return;
    }

    this.setTotalQuantity();
    console.log("newProduct");
    const newProduct = {
      ...this.myProduct,
      colorName: this.myProductColorName,
      size: this.myProductSize,
      quantity: 1,
    };
    console.log(newProduct);

    this.quantity = 1;
    this.bagService.setBagProducts$(newProduct);
    this.bagService.setTotalQuantity$(this.totalQuantity);
    this.setBagBtnTextContent();
    this.bagService.setBagToLocalStorage();
  }

  public ngOnDestroy(): void {
    // this.unsubscribeProductId$.unsubscribe();
  }
}
