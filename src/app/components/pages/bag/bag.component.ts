import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/shared/types/products";
import { BagService } from "src/app/components/pages/bag/bag.service";
import { IProductBag } from "src/app/components/pages/bag/types/bag.interface";
@Component({
  selector: "shop-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.scss"],
})
export class BagComponent implements OnInit {
  public totalQuantity!: number;
  public bagProducts: IProductBag[] = [];

  constructor(private bagService: BagService) {}

  ngOnInit(): void {
    this.subscribeGetTotalQuantity();
    this.subscribeGetBagProducts();
  }

  private subscribeGetTotalQuantity(): void {
    this.totalQuantity = this.bagService.getTotalQuantity;

    this.bagService.getTotalQuantity$.subscribe(quantity => {
      this.totalQuantity = quantity;
    });
  }
  private subscribeGetBagProducts(): void {
    console.log("subscribeGetBag");

    this.bagProducts = this.bagService.getBagProducts;

    this.bagService.getBagProducts$.subscribe(products => {
      this.bagProducts = products;
    });
  }
}
