import { Component, OnDestroy, OnInit } from "@angular/core";
// import { Subscription } from "rxjs";
import { ModalService } from "src/app/components/modal/modal.service";
// import { SignInComponent } from "src/app/shared/ui/modal/sign-in/sign-in.component";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { EIcons, EPath, IIcons } from "./header.interface";

@Component({
  selector: "shop-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public logo = { path: EPath.logo, icon: EIcons.logo };
  public iconUser = { path: EPath.user, icon: EIcons.user };
  public icons: IIcons[] = [
    { path: EPath.favorite, icon: EIcons.favorite, alt: "favorites" },
    { path: EPath.bag, icon: EIcons.bag, alt: "bag" },
  ];
  public username = this.currentUserService.getUserGuest;

  // private unsubscribeModalSequence$!: Subscription;

  // @ViewChild("formSignIn", { read: ViewContainerRef })
  // private formSignIn!: ViewContainerRef;

  constructor(private modalService: ModalService, private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    // const token = this.currentUserService.getToken;
    this.subscribeUserName$();
    // if (token === null) return;
    // this.subscribeUser$();
  }

  public subscribeUserName$() {
    this.currentUserService.getUserName$.subscribe(name => {
      console.log(name);

      this.username = name;
    });
  }
  // public subscribeUser$() {
  //   this.currentUserService.getUser$.subscribe(user => {
  //     console.log(user);

  //     this.username = user.name;
  //   });
  // }

  // private createANewModalWindow = {
  //   component: SignInComponent,
  //   context: {
  //     isSignUp: false,
  //     onCloseModal: () => {
  //       this.modalService.close();
  //       //  = false;
  //     },
  //   },
  // };

  public async onOpenModal(): Promise<void> {
    // const { SignInComponent } = await import("src/app/shared/ui/modal/sign-in/sign-in.component");
    // this.modalService.open(this.modalService.modalSignInComponent);
    // this.modalService.setIsLogin$(true);
    const token = this.currentUserService.getToken;

    if (token === null) {
      const { LogInComponent } = await import("src/app/auth/components/log-in/log-in.component");
      this.modalService.setIsLogin$(true);
      this.modalService.open(this.modalService.modalSignInComponent);
    } else {
      const { OpenAccountComponent } = await import(
        "src/app/auth/components/open-account/open-account.component"
      );
      this.modalService.open(this.modalService.modalMyAccountComponent);
      this.currentUserService.setUserName(this.username);
    }
  }
  private async addSignIn(): Promise<void> {}
  private async addMyAccount(): Promise<void> {}

  // public onOpenModal(): void {
  //   this.modalService.open(this.createANewModalWindow);
  //   this.modalService.setIsSignUp$(false);
  //   console.log("click open");
  // }

  ngOnDestroy(): void {}
}

// public async onOpenModal(): Promise<void> {
//   const token = this.userService.getToken;
//   console.log(token);

//   // if (token === null) this.addSignIn();
//   // else this.addMyAccount();

//   if (token === null) {
//     const { SignInComponent } = await import("src/app/shared/ui/modal/sign-in/sign-in.component");
//     this.modalService.setIsLogin$(true);
//     this.modalService.open(this.modalService.modalSignInComponent);
//   } else {
//     const { MyAccountComponent } = await import(
//       "src/app/shared/ui/modal/my-account/my-account.component"
//     );
//     this.modalService.open(this.modalService.modalMyAccountComponent);
//   }
// }

// private async addSignIn(): Promise<void> {}
// private async addMyAccount(): Promise<void> {}
