import { Component, OnInit } from "@angular/core";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { IUserResponse } from "src/app/auth/types/auth.interface";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Component({
  selector: "shop-current-user",
  templateUrl: "./current-user.component.html",
  styleUrls: ["./current-user.component.scss"],
})
export class CurrentUserComponent implements OnInit {
  // private isTokenKey = this.currentUserService.getIsTokenKey;
  // private user$!: Observable<IUser | null>;
  public currentUser: IUserResponse = this.currentUserService.user;
  public userHeight!: string;

  private userInfoKey = this.currentUserService.getUserInfoKey;

  constructor(
    private currentUserService: CurrentUserService,
    private localStorage: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.subscribeUser();
    this.subscribeFetchUser();
    this.subscribeUserHeight();
  }

  private subscribeUserHeight() {
    this.userHeight = this.currentUserService.initUserHeight;

    this.currentUserService.getUserHeight$.subscribe(height => {
      console.log(height);
      this.userHeight = height;
    });
  }

  private subscribeUser() {
    this.currentUserService.getUser$.subscribe(user => {
      console.log(user);
      if (!user) return;

      this.currentUser = user;
      this.currentUserService.setUserName$(user.name);
      console.log(user.role);
    });
  }

  private subscribeFetchUser() {
    const token = this.currentUserService.getToken;
    console.log(token);

    if (token === null) {
      return;
    }

    const userInfo = this.currentUserService.getUserInfo;
    console.log(userInfo);

    if (userInfo === true)
      this.currentUserService.fetchUser().subscribe(user => {
        console.log(user);
        this.currentUserService.setUser$(user);
      });
  }
}
