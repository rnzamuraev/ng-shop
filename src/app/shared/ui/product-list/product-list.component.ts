import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductsService } from "src/app/shared/services/products.service";
import { ECategory, IProduct } from "src/app/shared/types/products";
import { FormService } from "../../services/form.service";
import { IFilterValue } from "./types";

@Component({
  selector: "shop-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input()
  public myArrBtns: number[] = [];
  public limit = 10;
  private count!: number;
  public myBtnCondition = true;
  public products: IProduct[] = [];
  public newProducts: IProduct[] = [];
  public unsubscribeProducts!: Subscription;
  private category = this.productsService.getCategory;
  private unsubscribeCategory!: Subscription;
  public myTitle: string = "";
  public unsubscribeMyTitle!: Subscription;
  public filterMaxRange = 1000;
  public min = "";
  public filterValue: IFilterValue = {
    title: "",
    min: "".replace(/\d/g, ""),
    max: "".replace(/\d/g, ""),
  };
  // @ViewChildren("btnRef", { read: ViewContainerRef })
  // buttons!: ViewContainerRef[];
  // public myForm = this.formBuilder.group({
  //   searchTitle: ["", Validators.pattern(/^[a-zA-Z]+$/)],
  //   searchPriceFrom: ["", Validators.pattern(/^[0-9]+$/)],
  //   searchPriceTo: [""],
  // });

  // public myForm: FormGroup = new FormGroup({
  //   searchTitle: new FormControl(""),
  //   searchPriceFrom: new FormControl(""),
  //   searchPriceTo: new FormControl(""),
  // });

  constructor(
    private productsService: ProductsService,
    private formService: FormService // private formBuilder: FormBuilder
  ) {
    this.unsubscribeMyTitle = this.productsService.getPageTitle.subscribe(val => {
      this.myTitle = val;
    });

    this.unsubscribeCategory = this.category.subscribe(val => {
      this.filterByCategory(val);
    });
  }

  public ngOnInit(): void {
    // this.productsService.getUrlPagePathname();
    // console.log("this.buttons: ", this.buttons);
    // if (this.buttons) {
    //   this.buttons.forEach(el => console.log(el));
    // }
  }

  private filterByCategory(val: string) {
    this.filterValue = {
      title: "",
      min: "",
      max: "",
    };

    this.filterByApiCategory(val);
    this.filterByRatingAndPrice(val);
  }

  private filterByApiCategory(val: string) {
    if (
      val === ECategory.Electronics ||
      val === ECategory.Furniture ||
      val === ECategory.Women ||
      val === ECategory.Men
    ) {
      this.unsubscribeProducts = this.productsService
        .getProductsCategory(val)
        .subscribe(products => {
          this.products = products;
          this.productsLimit(0);
          this.getMyBtns();
        });
    }
  }

  private filterByRatingAndPrice(val: string) {
    this.unsubscribeProducts = this.productsService.getProducts().subscribe(products => {
      if (val === ECategory.Trending) {
        this.products = products.filter(prod => prod.rating.count > 350);
        this.productsLimit(0);
        this.getMyBtns();
      } else if (val === ECategory.LessThen100$) {
        this.products = products.filter(prod => prod.price < 100);
        this.productsLimit(0);
        this.getMyBtns();
      }
    });
  }

  private productsLimit(num: number) {
    if (this.products.length > this.limit) {
      this.count = Math.ceil(this.products.length / this.limit);
      this.newProducts = this.products.slice(0 + num, 10 + num);
      return;
    }
    this.newProducts = this.products;
  }

  private getMyBtns() {
    for (let i = 0; i < this.count; i++) {
      this.myArrBtns.push(i + 1);
    }
    // console.log(this.buttons);
    // this.buttons.forEach(el => console.log(el));
  }

  public onShowMore(num: number, el: HTMLButtonElement) {
    this.productsLimit(num * this.limit - this.limit);
    console.log(el);
  }

  public onChangeValue() {
    this.formService.setFilterForm(this.filterValue);
  }

  public onResetForm() {
    this.filterValue = {
      title: "",
      min: "",
      max: "",
    };
  }

  public ngOnDestroy(): void {
    this.unsubscribeMyTitle.unsubscribe();
    this.unsubscribeCategory.unsubscribe();
  }

  // public productsFilter(
  //   arr: IProduct[],
  //   title: string,
  //   min: number,
  //   max: number
  // ) {
  //   console.log('filter');
  //   if (!arr.length) return;

  //   if (title || min > 0 || max > 0) {
  //     if (!max) {
  //       max = this.filterRange.max;
  //     }
  //     const newArr = arr.filter(
  //       (el) =>
  //         el.title.toLowerCase().includes(title.toLowerCase()) &&
  //         min <= el.price &&
  //         el.price <= max
  //     );
  //     return newArr;
  //   }
  //   return arr;
  // }
}
