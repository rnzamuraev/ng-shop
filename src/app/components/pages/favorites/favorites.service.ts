import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IProduct } from "src/app/shared/types/products";
import { EPagesKey } from '../types/pages.enum'

@Injectable({
  providedIn: "root",
})
export class FavoritesService {
  private key = EPagesKey.FAVORITES;
  private favorites$ = new Subject<IProduct[]>();
  private newFavorites: IProduct[] = [];

  public get getFavorites$() {
    return this.favorites$.asObservable();
  }
  public get getNewFavorites() {
    return this.newFavorites;
  }

  // ******************************** //

  public initNewFavorites() {
    this.newFavorites = this.getLocalStorage();
    this.favorites$.next(this.getLocalStorage());
    console.log("init");
  }
  public initFavorites$() {
    this.newFavorites = this.getLocalStorage();
    this.favorites$.next(this.getLocalStorage());
    console.log("init");
  }

  public addToFavorites(prod: IProduct) {
    this.newFavorites.push(prod);
    this.setLocalStorage();
    this.favorites$.next(this.newFavorites);
  }

  public removeFromFavorites(prod: IProduct) {
    this.newFavorites = this.getLocalStorage().filter(p => p.id !== prod.id);
    this.setLocalStorage();
    this.favorites$.next(this.newFavorites);
  }

  private setLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.newFavorites));
  }

  private getLocalStorage(): IProduct[] {
    let arr: IProduct[] = [];

    const LS = localStorage.getItem(this.key);
    if (typeof LS === "string") {
      arr = JSON.parse(LS);
    }
    return arr.reverse();
  }
}
