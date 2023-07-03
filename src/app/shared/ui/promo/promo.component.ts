import { Component, OnInit } from "@angular/core";

@Component({
  selector: "shop-promo",
  templateUrl: "./promo.component.html",
  styleUrls: ["./promo.component.scss"],
})
export class PromoComponent implements OnInit {
  public myBtnTextContent = "Shop Now";

  ngOnInit(): void {}
}
