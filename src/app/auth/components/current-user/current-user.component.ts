import { Component, OnInit } from "@angular/core";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { IUserResponse } from "src/app/auth/types/auth.interface";

@Component({
  selector: "shop-current-user",
  templateUrl: "./current-user.component.html",
  styleUrls: ["./current-user.component.scss"],
})
export class CurrentUserComponent implements OnInit {
  // private isTokenKey = this.currentUserService.getIsTokenKey;
  // private user$!: Observable<IUser | null>;
  // public currentUser = this.currentUserService.getCurrentUser;
  public currentUser!: IUserResponse;
  public userHeight: string = this.currentUserService.getInitUserHeight;
  private isToken: boolean = this.currentUserService.getIsToken;

  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    this.subscribeCurrentUser();
    this.subscribeFetchUser();
    this.subscribeUserHeight();
    this.subscribeIsToken();
  }

  private subscribeIsToken() {
    this.currentUserService.getIsToken$.subscribe(data => {
      console.log(data);

      // this.currentUserService.setIsToken$();
      this.isToken = data;
    });
  }

  private subscribeUserHeight() {
    this.currentUserService.getUserHeight$.subscribe(height => {
      console.log(height);

      this.userHeight = height;
    });
  }

  private subscribeCurrentUser() {
    this.currentUserService.getCurrentUser$.subscribe(user => {
      console.log(user);

      if (user === null) return;

      this.currentUser = user;
      this.currentUserService.setUserName$(user.name);
    });
  }

  private subscribeFetchUser(): void {
    // const token = this.currentUserService.getToken;
    console.log("subscribeFetchUser");
    console.log(this.isToken);

    console.log("subscribeFetchUser");

    if (!this.isToken) {
      // this.currentUserService.setIsToken$(false);
      // this.isToken = false;
      return;
    }

    // this.isToken = true;
    // const userInfo = this.currentUserService.getUserInfo;
    // console.log(userInfo);

    // if (userInfo === true)
    this.currentUserService.setIsToken$(true);
    this.currentUserService.fetchUser().subscribe(user => {
      console.log(user);
      this.currentUserService.setCurrentUser$(user);
    });
  }
}
