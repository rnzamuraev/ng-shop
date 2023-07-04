import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FavoritesService } from "src/app/components/pages/favorites/favorites.service";
import { IProduct } from "../../types/products";
import { IFilterValue } from "../product-list/types";

@Component({
  selector: "shop-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit, OnDestroy {
  public isFavorites = false;
  private unsubscribeFavorites!: Subscription;
  @Input()
  public product!: IProduct;
  // @Output()
  //   public resetForm!: NgForm
  @Input()
  public form!: IFilterValue;

  constructor(private favoritesService: FavoritesService) {
    //   this.unsubscribeFavorites = this.favoritesService.getFavorites$.subscribe(prod => {
    //  });
  }

  ngOnInit(): void {
    this.favoritesService.getNewFavorites.forEach(el => {
      if (el.id === this.product.id) {
        this.isFavorites = true;
      }
    });
  }

  // d = this.product.category
  public titleLength(): string {
    // console.log(this.product);
    if (this.product.title.length > 40) {
      return this.product.title.slice(0, 39) + "...";
    }

    return this.product.title;
  }

  public onToggleFavorites() {
    this.isFavorites = !this.isFavorites;

    if (this.isFavorites) {
      this.favoritesService.addToFavorites(this.product);
    } else {
      this.favoritesService.removeFromFavorites(this.product);
    }

    // this.favoritesService.setFavorites(this.product)
  }

  public resetForm() {
    console.log("reset");
    this.form = {
      title: "",
      min: "",
      max: "",
    };
  }

  onOpenProductPage(id: number) {
    this.resetForm();
  }

  ngOnDestroy(): void {
    // this.unsubscribeFavorites.unsubscribe();
  }
}
