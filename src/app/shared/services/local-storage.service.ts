import { Injectable } from "@angular/core";
import { IProduct } from "../types/products";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private favorites: IProduct[] = [];
  private key = "favorites";

  constructor() {}

  public getData() {
    let value = localStorage.getItem(this.key);
    if (typeof value === "string") {
      this.favorites = JSON.parse(value);
    }
    console.log(this.favorites);
    return this.favorites;
  }
  private setData(key: string, value: IProduct[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public addFavorites(value: IProduct) {
    this.favorites.push(value);
    this.setData(this.key, this.favorites);
    console.log(this.favorites);
  }
  public removeFavorites(value: IProduct) {
    const newFavorites = this.favorites.filter(el => el.id !== value.id);

    this.setData(this.key, newFavorites);
    this.favorites = newFavorites;
    console.log(this.favorites);
  }
  // ***** ************** *****//
  get(key: string) {
    try {
      const data = localStorage.getItem(key);
      console.log(data);
      if (typeof data === "string") return JSON.parse(data);
      else if (!data) return null;
    } catch (error) {
      console.error("Error getting data from LocalStorage", error);
      return null;
    }
  }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to LocalStorage", error);
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error saving to LocalStorage", error);
    }
  }
}
