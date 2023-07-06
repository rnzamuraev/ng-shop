import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription, of } from "rxjs";

import { HomeService } from "src/app/components/pages/home/home.service";
import {
  IProductColor,
  IProductSize,
} from "src/app/components/pages/product/product-info/product-info.interface";
import { ProductInfoService } from "src/app/components/pages/product/product-info/product-info.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { ProductsService } from "src/app/shared/services/products.service";
import { IProduct } from "src/app/shared/types/products";

@Component({
  selector: "shop-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.scss"],
})
export class ProductInfoComponent implements OnInit, OnDestroy {
  public myBtnTextContentBuy = "Add to cart";
  public addFavorites = "Add to favorites";
  public removeFavorites = "Remove from favorites";
  public myBtnTextContent = this.addFavorites;
  public Black = "black";
  public carousel = [{ path: "" }];
  public myProduct!: IProduct;
  public myColor: IProductColor[] = [];
  public mySize: IProductSize[] = [];
  public isBtnCondition = false;
  public isColorCondition!: boolean;
  public myFavorites!: IProduct[];
  private widthWindow!: number;
  public isWidth!: boolean;

  public productId!: number;
  public unsubscribeProductId$!: Subscription;
  public unsubscribeWindowWidth$!: Subscription;
  // @ViewChildren("size")
  // public size?: QueryList<ElementRef<HTMLSpanElement>>;
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
  public color = "";
  public size = "";

  public getData(arr: IProduct[]): Observable<IProduct[]> {
    return of(arr);
  }

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private location: Location,
    private productInfoService: ProductInfoService,
    private homeService: HomeService,
    private localStorage: LocalStorageService
  ) {}

  public getProductId() {
    this.route.params.subscribe(data => {
      this.productId = data["id"];

      this.color = this.radioBtnColor[0].color;
      this.size = this.radioBtnSize[0].size;
    });
  }

  ngOnInit(): void {
    this.widthWindow = window.innerWidth;
    this.setIsWidth();
    this.getProductId();
    this.subscribeProductId$();
    this.productInfoService.setProductId$(this.productId);
    this.subscribeWindowWidth$();
    // *********
    //   this.localStorage.getData().forEach(el => {
    //     if (el.id === this.myProduct[0].id) {
    //       this.setIsBtnCondition();
    //     }
    //   });
    // });
    // ********

    this.productsService.setColor(this.myColor);
    this.productsService.setSize(this.mySize);
  }

  private setIsWidth() {
    if (this.widthWindow > 1200) {
      this.isWidth = false;
    } else {
      this.isWidth = true;
    }
  }

  private subscribeWindowWidth$() {
    this.unsubscribeWindowWidth$ = this.homeService.getWidthWindow$.subscribe(width => {
      this.widthWindow = width;
      this.setIsWidth();
    });
  }
  private subscribeProductId$() {
    this.unsubscribeProductId$ = this.productInfoService.getProductId$.subscribe(id => {
      console.log(this.productId);
      this.productId = id;
      console.log(this.productId);

      // this.productId = this.getProductId();

      console.log(this.route.data);
      this.productInfoService.getProduct(this.productId).subscribe(product => {
        console.log(product);
        if (product === null) {
          console.log("null");
          this.location.back();
          return;
        }

        this.myProduct = product;
        console.log(this.myProduct);
      });
    });
  }

  setIsBtnCondition() {
    console.log("isBtnCondition: ", this.isBtnCondition);
    this.isBtnCondition = !this.isBtnCondition;
    console.log("isBtnCondition: ", this.isBtnCondition);
    if (this.isBtnCondition) {
      this.myBtnTextContent = this.removeFavorites;
    } else {
      this.myBtnTextContent = this.addFavorites;
    }
  }

  public onFavoritesHandler(el: IProduct) {
    this.setIsBtnCondition();

    if (this.isBtnCondition) {
      this.localStorage.addFavorites(el);
    } else {
      this.localStorage.removeFavorites(el);
    }
  }

  public onBackToShop() {
    this.location.back();
  }

  public onResizeHandler(val: string) {}
  public onColorChangeHandler(val: string) {}

  public onColorChecked(value: string) {
    console.log(value);

    this.radioBtnColor.forEach(color => {
      color.isColor = false;
      if (color.color === value) {
        console.log("value: ", value);
        color.isColor = true;

        this.color = color.color;
      }
    });
  }

  public onSizeChecked(value: string) {
    this.radioBtnSize.forEach(size => {
      size.isSize = false;
      if (size.size === value) {
        console.log("value: ", value);
        size.isSize = true;

        this.size = value;
      }
    });
  }

  // private setValue(arr: IProductColor[] | IProductSize[], value: string) {
  //   arr.forEach(val => {
  //     if (val.color) {
  //     } else {
  //       val.isSize = false;
  //       if (val.size === value) {
  //         console.log("value: ", value);
  //         val.isSize = true;
  //       }
  //     }
  //   });
  // }

  public onAddToBag(product: IProduct) {
    console.log("newProduct");
    const newProduct = {
      ...product,
      color: this.color,
      size: this.size,
    };
    console.log(newProduct);
  }

  public ngOnDestroy(): void {
    this.unsubscribeProductId$.unsubscribe();
    this.unsubscribeWindowWidth$.unsubscribe();
  }
}

//  private setIsFavorites() {
//     this.favoritesService.getNewFavorites.forEach(el => {
//       if (el.id === this.product.id) {
//         this.isFavorites = true;
//       }
//     });
//   }

//   public onToggleFavorites() {
//     this.isFavorites = !this.isFavorites;

//     if (this.isFavorites) {
//       this.favoritesService.addToFavorites(this.product);
//     } else {
//       this.favoritesService.removeFromFavorites(this.product);
//     }

//     // this.favoritesService.setFavorites(this.product)
//   }
