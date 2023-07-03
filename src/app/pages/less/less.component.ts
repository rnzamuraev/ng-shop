import { Component, OnInit } from "@angular/core";
import { ProductsService } from 'src/app/shared/services/products.service'

@Component({
  selector: "shop-less",
  templateUrl: "./less.component.html",
  styleUrls: ["./less.component.scss"],
})
export class LessComponent implements OnInit {
  // private price$
  constructor(private productsService: ProductsService) {
  }
  ngOnInit(): void {
    // this.productsService.getProductsPrice(this.productsService.price$ ,100)
  }
}
