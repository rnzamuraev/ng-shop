import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, delay } from "rxjs";
// import { CardService } from "../../shared/services/card.service";
import { ProductsService } from "src/app/shared/services/products.service";
import { IProduct } from "src/app/shared/types/products";
import { UnSubscribe } from "src/app/utils/unSubscribe";
import { HomeService } from "./home.service";

@Component({
  selector: "shop-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent extends UnSubscribe implements OnInit, OnDestroy {
  public loading = true;
  public routePathTrending = "trending";
  public routePathLess = "less-than-100$";
  public myTrendingTitle = "Trending";
  public myLessThanTitle = "Less than 100$";
  public myTrendingBtnText = "See more";
  public productsSubscription!: Subscription;
  public unsubscribeWindowWith!: Subscription;
  public productsRating!: IProduct[];
  public productsPrice!: IProduct[];
  public newProductsRating!: IProduct[];
  public newProductsPrice!: IProduct[];
  public widthWindow!: number;
  public sliceEnd!: number;
  public product = this.productsService.product$;

  constructor(
    // private cardService: CardService,
    private productsService: ProductsService,
    private homeService: HomeService
  ) {
    super();
    // this.homeService.initWidthWindow$();
  }

  public ngOnInit(): void {
    this.widthWindow = window.innerWidth;

    this.subscribeWidthWindow();

    this.subscribeProductsFilter();
    // this.cardService
    //   .fetchData()
    //   .pipe(delay(500))
    //   .subscribe(() => {
    //     this.loading = false;
    //   });

    // ********************** //
    // .fetchData()
    // .pipe(takeUntil(this.unSubscriber$))
    // .subscribe(prod => {
    //   console.log(prod);
    // });
    // ********************** //
  }

  private subscribeWidthWindow() {
    this.unsubscribeWindowWith = this.homeService.getWidthWindow$.subscribe(width => {
      this.widthWindow = width;
      this.windowResize();
    });
  }

  private windowResize() {
    if (this.widthWindow > 1440) {
      this.sliceEnd = 5;
    } else if (992 < this.widthWindow && this.widthWindow <= 1440) {
      this.sliceEnd = 4;
    } else if (768 < this.widthWindow && this.widthWindow <= 992) {
      this.sliceEnd = 3;
    } else if (this.widthWindow <= 768) {
      this.sliceEnd = 4;
    }

    this.newProductsRating = this.productsRating.slice(0, this.sliceEnd);
    this.newProductsPrice = this.productsPrice.slice(0, this.sliceEnd);
  }

  private filterByRating(products: IProduct[]) {
    this.productsRating = products.filter(p => p.rating.count > 350).reverse();
  }

  private filterByPrice(products: IProduct[]) {
    this.productsPrice = products.filter(p => {
      return Math.floor(p.price) < 100;
    });
  }

  private subscribeProductsFilter() {
    this.productsSubscription = this.productsService.getProducts().subscribe(prod => {
      this.filterByRating(prod);
      this.filterByPrice(prod);
      this.windowResize();
    });
  }

  override ngOnDestroy(): void {
    this.unsubscribeWindowWith.unsubscribe();
    // if (this.productsSubscription) {
    this.productsSubscription.unsubscribe();
    // }
  }
}
