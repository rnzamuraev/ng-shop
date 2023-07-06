import { Component, Input, OnInit } from "@angular/core";
// import { CardProductService } from '../../services/card-product.services';
import { IProduct } from "../../types/products";

@Component({
  selector: "shop-block-cards",
  templateUrl: "./block-cards.component.html",
  styleUrls: ["./block-cards.component.scss"],
})
export class BlockCardsComponent implements OnInit {
  @Input()
  public products!: IProduct[];
  @Input()
  public myBtnTextContent!: string | number;
  public isBtnCondition = true;
  @Input()
  public myTitle!: string;
  @Input()
  public myBtnText!: string;
  @Input()
  public routePath!: string;

  constructor() {} // private cardProductService: CardProductService

  public ngOnInit(): void {
    // console.log(this.myBtnText);
    // this.btnService.setValue(this.myBtnText);
    // this.myBtnTextContent = this.btnService.btnText;
    //**  console.log(this.products);
    //** this.products.forEach((prod, i) => {
    //**   if (i > 4) {
    //**     return;
    //**   }
    //**   this.newProducts.push(prod);
    //** });
    //** console.log(this.newProducts);
    // this.products = arr;
    // console.log(this.products);
    // this.cardProductService.products$
    // console.log(this.cardProductService.products);
    // const prod$ = this.cardProductService.fetchData();
    // console.log(prod$);
    // subscribe((prod) => {
    // //   const arr: IProduct[] = [];
    // //   prod.forEach((el, i: number) => {
    // //     if (i < 5) {
    // //       arr[i] = el;
    // //     }
    // //   });
    // //   this.products = arr;
    // //   console.log(prod);
    // //   // console.log(prod5);
    // // });
  }
}
