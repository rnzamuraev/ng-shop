import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { IUserResponse } from "src/app/shared/ui/modal/sign-in/sign-in.interface";
import { UserService } from "./user.service";

@Component({
  selector: "shop-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  // private isTokenKey = this.userService.getIsTokenKey;
  // private user$!: Observable<IUser | null>;
  public currentUser!: IUserResponse;
  public userHeight!: string;

  private userInfoKey = this.userService.getUserInfoKey;

  constructor(private userService: UserService, private localStorage: LocalStorageService) {
    // this.user$.subscribe(user => {
    //   console.log(user);
    //   if (user !== null) {
    //     this.user = user;
    //     // this.userService.setIsUser(true);
    //   }
    // });
  }
  ngOnInit(): void {
    this.subscribeUser();
    this.subscribeFetchUser();
    this.subscribeUserHeight();
  }

  private subscribeUserHeight() {
    this.userHeight = this.userService.initUserHeight;

    this.userService.getUserHeight$.subscribe(height => {
      console.log(height);
      this.userHeight = height;
    });
  }

  private subscribeUser() {
    this.userService.getUser$.subscribe(user => {
      console.log(user);
      this.currentUser = user;
    });
  }

  private subscribeFetchUser() {
    const token = this.userService.getToken;
    if (token === null) return;

    const userInfo = this.userService.getUserInfo;

    if (userInfo === false)
      this.userService.fetchUser().subscribe(user => {
        console.log(user);
        this.userService.setUser$(user);
        this.userService.setUserName$(user.name);
        this.localStorage.set(this.userInfoKey, { ...user, user: true });
      });
  }
}
