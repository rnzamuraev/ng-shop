import { Component, Input, OnInit } from "@angular/core";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";
import { IUserResponse } from "src/app/auth/types/auth.interface";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { CurrentUserService } from "../current-user.service";
import { EAuthStatic } from "src/app/auth/types/authStatic.enum";
import { ModalService } from "src/app/components/modal/modal.service";

@Component({
  selector: "shop-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  public listLink = [
    { path: "my-details", text: "My details", active: true },
    { path: "my-orders", text: "My orders", active: false },
    { path: "address-book", text: "Address book", active: false },
    { path: "change-password", text: "Change password", active: false },
    { path: "payment-methods", text: "Payment methods", active: false },
    { path: "contact-preferences", text: "Contact preferences", active: false },
    { path: "gift-cards-&-vouchers", text: "Gift cards & vouchers", active: false },
    { path: "where's-my-order?", text: "Where's my order?", active: false },
    { path: "how-do-I-make-a-return?", text: "How do I make a return?", active: false },
  ];
  public header: string = "My details";
  @Input()
  public currentUser!: IUserResponse;
  public isToken = this.currentUserService.getIsToken;
  public isLogin = this.modalService.getIsLogin;

  constructor(
    private localStorageService: LocalStorageService,
    private loginService: LogInService,
    private currentUserService: CurrentUserService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    // console.log(this.currentUser.avatar);
    // this.subscribeIsToken();
    // this.setIsAvatar();
  }

  private subscribeCurrentUser() {
    console.log("this.currentUser.avatar");
    this.currentUserService.getCurrentUser$.subscribe(user => {
      console.log(typeof user.avatar);
    });
  }

  // private subscribeIsToken() {
  //   console.log("subscribeIsToken");
  //   this.currentUserService.getIsToken$.subscribe(data => {
  //     this.isToken = data;
  //   });
  //   // const token = this.localStorageService.get(this.logInService.getTokenKey);
  //   // if (typeof token === "string") this.isToken = true;
  //   // else this.isToken = false;
  // }

  public onSetActiveLink(text: string) {
    this.listLink.forEach(link => {
      link.active = false;
      if (text === link.text) {
        link.active = true;
        this.header = link.text;
      }
    });
  }

  public onSignOut() {
    this.localStorageService.remove(EAuthStatic.TOKEN_KEY);
    this.currentUserService.setIsToken$(false);
    this.currentUserService.setUserName$(EAuthStatic.GUEST);
    // this.currentUser = null
  }
  public onOpenSignIn() {
    this.modalService.setIsLogin$(true);
    this.modalService.addSignIn();
  }
  public onOpenSignUp() {
    this.modalService.setIsLogin$(false);
    this.modalService.addSignIn();
  }
}
