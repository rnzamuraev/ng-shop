import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

// import { ProductInfoService } from "src/app/components/pages/product/product-info/product-info.service";
import { ProductsService } from "src/app/shared/services/products.service";
// import { ISearchProduct } from './search.types'
import { ISearchProduct } from "src/app/components/header/search/search.types";
import { ProductService } from "src/app/components/pages/product/product.service";

@Component({
  selector: "header-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit, OnDestroy {
  // public formBtnText = "add-form";
  public title: string = "";
  private search: string = "";
  public products: ISearchProduct[] = [];
  public listProductName: ISearchProduct[] = [];
  public myDisplay!: "none" | "block";
  public isBorder = false;
  private unSubscribe!: Subscription;

  constructor(private productsService: ProductsService, private productService: ProductService) {}

  ngOnInit(): void {
    this.getNameProductsToSearch();
  }

  private getNameProductsToSearch() {
    this.productsService.getProducts().subscribe(prod => {
      this.products = prod.map(data => {
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

    this.listProductName = this.filterField(this.products);

    this.isBorder = true;
    this.myDisplay = "block";
  }

  public onClickHandler(id: number, search: HTMLInputElement) {
    this.productService.setProductId$(id);

    search.value = "";
    this.onNameSearch("");
    // this.search = "";
  }

  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe();
  }
}
