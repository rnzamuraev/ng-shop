import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription, of } from "rxjs";

import { ProductService } from "./product.service";
import { IProduct } from "src/app/shared/types/products";
import { ProductsService } from 'src/app/shared/services/products.service'

@Component({
  selector: "shop-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  private productId!: number;
  private count!: number;
  private bag!: number;
  public myProduct!: IProduct;

  constructor(
    // private route: ActivatedRoute,
    private productService: ProductService,
    private productsService: ProductsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscribeGetProductId();
    this.getProductIdRouteParams();

    // this.productsService.setColor(this.myColor);
    // this.productsService.setSize(this.mySize);
  }

  private subscribeGetProductId() {
    this.productService.getProductId$.subscribe(id => {
      // this.productId = id;

      this.subscribeFetchProduct(id);
    });
  }
  private getProductIdRouteParams() {
    this.route.params.subscribe(data => {
      this.productService.setProductId$(data["id"]);
      // this.productId = data["id"]; // ***???

      // this.color = this.radioBtnColor[0].color;
      // this.size = this.radioBtnSize[0].size;
    });
  }
  private subscribeFetchProduct(id: number) {
    this.productService.getProduct(id).subscribe(product => {
      console.log(product);
      if (product === null) {
        console.log("null");
        this.location.back();
        return;
      }

      this.myProduct = product;
      console.log(this.myProduct);
    });
  }
  private setProduct() {}
}
