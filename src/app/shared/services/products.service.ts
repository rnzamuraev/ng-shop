import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subject, catchError, delay, of } from "rxjs";

import { BASE_URL_TOKEN } from "src/app/config";
import { colors, sizes } from "src/app/data/products";
import { IProduct } from "src/app/shared/types/products";
import {
  IProductColor,
  IProductSize,
} from "src/app/components/pages/product/product-info/product-info.interface";

@Injectable({ providedIn: "root" })
export class ProductsService {
  private limit = 10;
  // public products$: IProduct[] = [];
  // public productsCategory: IProduct[] = [];
  // public rating: IProduct[] = [];
  // public colors: IProductColor[] = [];
  // public sizes: IProductSize[] = [];
  public categoryName: string = `Home`;
  private pageTitle$ = new Subject<string>();
  public price$ = new Subject<IProduct[] | never[]>();
  private category$ = new Subject<string>();
  public product$ = new Subject<IProduct>();
  public prod!: IProduct[];
  // private product$ = new Subject<IProduct[] | never[]>();

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    @Inject(BASE_URL_TOKEN) private BASE_URL: string
  ) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.BASE_URL}/products`).pipe(
      catchError(() => {
        return of<IProduct[]>([]);
      })
    );
  }

  public getProductsCategory(category: string): Observable<IProduct[] | never[]> {
    return this.http.get<IProduct[]>(`${this.BASE_URL}/products/category/${category}`);
  }

  // public getProductsPrice(num: number) {
  //   let arr: IProduct[] = []

  //   this.http.get<IProduct[]>(`/products`).forEach(products => {
  //     arr = products.filter(prod => prod.price < num);
  //   });

  //   return arr
  // }

  // public getProduct(id: number): Observable<IProduct[] | never[]> {
  //   return this.http.get<IProduct[]>(`/products/${id}`).pipe(map(prod => prod
  //   ));
  // }

  public getUrlPagePathname() {
    const path = document.location.pathname.slice(1);
    console.log(path);

    return path;
  }

  // *********************************************** //
  public fetchDataColor(): Observable<IProductColor[]> {
    return of(colors).pipe(delay(500));
  }
  public fetchDataSize(): Observable<IProductSize[]> {
    return of(sizes).pipe(delay(500));
  }
  // *********************************************** //

  // public filterByRating(newArr: IProduct[]) {
  //   this.getProducts().subscribe(prod => {
  //     newArr = prod.filter(p => p.rating.count > 350).reverse();
  //   });
  //   console.log(newArr);
  // }

  // public filterByPrice(newArr: IProduct[]) {
  //   this.getProducts().subscribe(prod => {
  //     newArr = prod.filter(p => {
  //       return Math.floor(p.price) < 100;
  //     });
  //   });
  // }

  public filterById(newArr: IProduct[], id: number) {
    this.getProducts().forEach(prod => {
      newArr = prod.filter(p => p.id === id);
    });
  }

  // public filterByCategory(newArr: IProduct[], category: string) {
  //   this.getProducts().forEach(prod => {
  //     newArr = prod.filter(el => el.category === category);
  //   });
  // }

  public setColor(newArr: IProductColor[]) {
    this.fetchDataColor().forEach(color => (newArr = color));
  }

  public setSize(newArr: IProductSize[]) {
    this.fetchDataSize().forEach(size => (newArr = size));
  }

  public get getCategory() {
    return this.category$.asObservable();
  }
  public get getPageTitle() {
    return this.pageTitle$.asObservable();
  }
  public setCategoryAndTitle(category: string, pageTitle: string) {
    console.log(pageTitle);
    this.category$.next(category);
    this.pageTitle$.next(pageTitle);
  }

  // fetchDataCarousel(): Observable<IProduct[]> {
  //   return of(data).pipe(delay(1500));
  // }
}
