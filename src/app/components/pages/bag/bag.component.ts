import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/shared/types/products";
import { BagService } from "./bag.service";

@Component({
  selector: "shop-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.scss"],
})
export class BagComponent implements OnInit {
  public count!: number;
  public bag: IProduct[] = [];

  constructor(private bagService: BagService) {}

  ngOnInit(): void {
    this.subscribeGetCount();
    this.subscribeGetBag();
  }

  private subscribeGetCount() {
    this.count = this.bagService.getCount;

    this.bagService.getCount$.subscribe(num => {
      this.count = num;
    });
  }
  private subscribeGetBag() {
    this.bagService.getLocalStorage();
    this.bag = this.bagService.getBag;

    this.bagService.getBag$.subscribe(num => {
      this.bag = num;
    });
  }
}
