import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { FavoritesService } from "src/app/components/pages/favorites/favorites.service";
import { HomeService } from "src/app/components/pages/home/home.service";
import { LocalStorageService } from "./shared/services/local-storage.service";
import { EAuthStatic } from "./auth/types/authStatic.enum";

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
    this.currentUserService.setUserHeight$(this.windowMinHeight);
  }

  constructor(
    private favoritesService: FavoritesService,
    private homeService: HomeService,
    private currentUserService: CurrentUserService,
    private localStorage: LocalStorageService
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
    this.currentUserService.setUserHeight$(this.windowMinHeight);
  }

  private setWindowMinHeight() {
    const footer = this.footer.nativeElement.offsetHeight;
    const header = this.header.nativeElement.offsetHeight;
    this.windowMinHeight = window.innerHeight - (footer + header) + "px";
  }

  private getToken() {
    const token = this.localStorage.get(EAuthStatic.TOKEN_KEY);
    console.log(token);

    if (token === null) return;

    // this.currentUserService.setToken$(token);
    // this.localStorage.set(EAuthStatic.TOKEN_KEY);
    this.currentUserService.setIsToken$(true);
    this.currentUserService.fetchUser().subscribe(user => {
      this.currentUserService.setUserName$(user.name);
      this.currentUserService.setCurrentUser$(user);
    });
  }
}
