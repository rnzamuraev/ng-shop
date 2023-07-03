import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/shared/types/products";
import { ModalService } from "src/app/shared/ui/modal/modal.service";
import { FavoritesService } from "./favorites.service";

@Component({
  selector: "shop-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  public isBtnCondition = true;
  public myBtnTextContent = "Sign In";
  private unsubscribeFavorites$!: Subscription;
  public favorites: IProduct[] = [];

  constructor(private modalService: ModalService, private favoritesService: FavoritesService) {
    // this.favorites = this.favoritesService.getNewFavorites;
    this.unsubscribeFavorites$ = this.favoritesService.getFavorites$.subscribe(products => {
      console.log("this.favoritesService.getFavorites$.subscribe");
      this.favorites = products;
    });
  }
  ngOnInit(): void {
    this.favoritesService.initFavorites$();
  }

  public async onOpenModal(): Promise<void> {
    const { SignInComponent } = await import("src/app/shared/ui/modal/sign-in/sign-in.component");
    this.modalService.open(this.modalService.modalSignInComponent);
    this.modalService.setIsLogin$(true);
  }

  ngOnDestroy(): void {
    // if (this.unsubscribeFavorites$) {
    this.unsubscribeFavorites$.unsubscribe();
    // }
  }
}
