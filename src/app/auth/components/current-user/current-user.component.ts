import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { IUserResponse } from "src/app/auth/types/auth.interface";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";

@Component({
  selector: "shop-current-user",
  templateUrl: "./current-user.component.html",
  styleUrls: ["./current-user.component.scss"],
})
export class CurrentUserComponent implements OnInit {
  // private isTokenKey = this.currentUserService.getIsTokenKey;
  // private user$!: Observable<IUser | null>;
  public currentUser!: IUserResponse;
  public userHeight!: string;

  private userInfoKey = this.currentUserService.getUserInfoKey;

  constructor(
    private currentUserService: CurrentUserService,
    private localStorage: LocalStorageService
  ) {
    // this.user$.subscribe(user => {
    //   console.log(user);
    //   if (user !== null) {
    //     this.user = user;
    //     // this.currentUserService.setIsUser(true);
    //   }
    // });
  }
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
      this.currentUser = user;
    });
  }

  private subscribeFetchUser() {
    const token = this.currentUserService.getToken;
    if (token === null) return;

    const userInfo = this.currentUserService.getUserInfo;

    if (userInfo === false)
      this.currentUserService.fetchUser().subscribe(user => {
        console.log(user);
        this.currentUserService.setUser$(user);
        this.currentUserService.setUserName$(user.name);
        this.localStorage.set(this.userInfoKey, { ...user, user: true });
      });
  }
}
