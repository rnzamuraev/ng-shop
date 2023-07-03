import { HostListener, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  private widthWindow$ = new Subject<number>();

  constructor() {}

  // public initWidthWindow$() {
  //   this.widthWindow$.next(window.innerWidth);
  //   console.log(this.widthWindow$.forEach(width => console.log(width)));
  // }

  public get getWidthWindow$() {
    console.log(this.widthWindow$.forEach(width => console.log(width)));
    return this.widthWindow$.asObservable();
  }

  public setWidthWindow$(width: number) {
    console.log(this.widthWindow$.forEach(width => console.log(width)));
    this.widthWindow$.next(width);
  }
}
