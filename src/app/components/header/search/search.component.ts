import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { ProductInfoService } from "src/app/components/pages/product/product-info/product-info.service";
import { ProductsService } from "src/app/shared/services/products.service";
// import { ISearchProduct } from './search.types'
import { ISearchProduct } from "src/app/components/header/search/search.types";

@Component({
  selector: "header-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit, OnDestroy {
  public formBtnText = "add-form";
  public title: string = "";
  private search: string = "";
  public products: ISearchProduct[] = [];
  public listTitle: ISearchProduct[] = [];
  public myDisplay!: "none" | "block";
  public isBorder = false;
  private unSubscribe!: Subscription;

  constructor(
    private productsService: ProductsService,
    private productInfoService: ProductInfoService
  ) {}

  ngOnInit(): void {
    this.unSubscribe = this.productsService.getProducts().subscribe(p => {
      this.products = p.map(data => {
        const newData = {
          id: data.id,
          title: data.title,
        };
        console.log(newData);
        return newData;
      });
    });
  }

  private filterField(products: ISearchProduct[]) {
    return products.filter(p => {
      console.log(`${p.title.toLowerCase()}`.includes(this.search));

      return p.title.toLowerCase().includes(this.search);
    });
  }

  // onInputHandler(elem: HTMLInputElement) {
  public onNameSearch(text: string) {
    this.search = text.toLowerCase();

    if (!this.search) {
      this.myDisplay = "none";
      this.isBorder = false;
      return;
    }

    this.listTitle = this.filterField(this.products);

    this.isBorder = true;
    this.myDisplay = "block";
  }

  public onClickHandler(id: number, search: HTMLInputElement) {
    this.productInfoService.setProductId$(id);

    search.value = "";
    this.onNameSearch("");
    // this.search = "";
  }

  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe();
  }
  // onAddTodoHandler() {
  //   console.log(this.title);
  //   const todo = {
  //     userId: 2,
  //     id: Date.now(),
  //     title: this.title,
  //     completed: false,
  //   };
  //   console.log(todo);

  //   this.cardService.addTodo(todo);
  //   this.title = "";
  // }
}
// export class SearchComponent implements OnInit {
//   public formBtnText = "add-form";
//   public title: string = "";
//   private search: string = "";

//   // constructor(private cardService: CardService) {}
//   constructor(private productsService: ProductsService) {}

//   ngOnInit() {}

//   // onInputHandler(elem: HTMLInputElement) {
//   onInputHandler(text: string) {
//     // console.log(elem.value);

//     this.search = text.toLowerCase();
//   }

//   filterField(products: IProduct[]) {
//     products.filter(p => `${p.title} ${p.price}`.toLocaleLowerCase().toLowerCase());
//   }

//   onAddTodoHandler() {
//     console.log(this.title);
//     const todo = {
//       userId: 2,
//       id: Date.now(),
//       title: this.title,
//       completed: false,
//     };
//     console.log(todo);

//     this.cardService.addTodo(todo);
//     this.title = "";
//   }
// }
