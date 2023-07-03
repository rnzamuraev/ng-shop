import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { FavoritesService } from "./pages/favorites/favorites.service";
import { HomeService } from "./pages/home/home.service";
import { UserService } from "./pages/user/user.service";

@Component({
  selector: "shop-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public windowMinHeight!: string;
  @ViewChild("footer", { read: ElementRef, static: true })
  private footer!: ElementRef;
  @ViewChild("header", { read: ElementRef, static: true })
  private header!: ElementRef;

  //** Изменение размера экрана **//
  @HostListener("window:resize", ["$event"])
  public onResizeHandler(event: any) {
    this.homeService.setWidthWindow$(event.target.innerWidth);
    this.setWindowMinHeight();
    // this.homeService.windowResize();
    this.userService.setUserHeight$(this.windowMinHeight);
  }

  constructor(
    private favoritesService: FavoritesService,
    private homeService: HomeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initNewFavorites();
    this.setWindowMinHeight();
    this.getToken();
    this.setInitUserHeight();
  }

  private initNewFavorites() {
    this.favoritesService.initNewFavorites();
  }

  private setInitUserHeight() {
    this.userService.setInitUserHeight(this.windowMinHeight);
  }

  private setWindowMinHeight() {
    const footer = this.footer.nativeElement.offsetHeight;
    const header = this.header.nativeElement.offsetHeight;
    this.windowMinHeight = window.innerHeight - (footer + header) + "px";
  }

  private getToken() {
    const token = this.userService.getToken;
    console.log(token);

    if (token === null) return;
    else
      this.userService.fetchUser().subscribe(user => {
        this.userService.setUser$(user);
        this.userService.setUserName$(user.name);
      });
  }
}
