import { Component, Input, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { IUserResponse } from "src/app/shared/ui/modal/sign-in/sign-in.interface";
import { SignInService } from "src/app/shared/ui/modal/sign-in/sign-in.service";

@Component({
  selector: "shop-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  public listLink = [
    { path: "my-details", text: "My details", active: true },
    { path: "my-orders", text: "My orders", active: true },
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
  public isToken = false;

  constructor(
    private localStorageService: LocalStorageService,
    private signInService: SignInService
  ) {}

  ngOnInit(): void {
    this.setIsToken();
  }

  private setIsToken() {
    const token = this.localStorageService.get(this.signInService.getTokenKey);
    if (typeof token === "string") this.isToken = true;
    else this.isToken = false;
  }

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
    this.localStorageService.remove(this.signInService.getTokenKey);
  }
  public onSignIn() {}
  public onSignUp() {}
}
