import { Component, OnDestroy, OnInit } from "@angular/core";
// import { Subscription } from "rxjs";
import { ModalService } from "src/app/components/modal/modal.service";
// import { SignInComponent } from "src/app/shared/ui/modal/sign-in/sign-in.component";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";
import { EAuthStatic } from "src/app/auth/types/authStatic.enum";
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
  public username: string = EAuthStatic.GUEST;
  public isToken!: boolean;
  // public isLogin = this.modalService.getIsLogin;

  // private unsubscribeModalSequence$!: Subscription;

  // @ViewChild("formSignIn", { read: ViewContainerRef })
  // private formSignIn!: ViewContainerRef;

  constructor(
    private modalService: ModalService,
    private currentUserService: CurrentUserService,
    private loginService: LogInService
  ) {}

  ngOnInit(): void {
    this.isToken = this.currentUserService.getIsToken;
    this.subscribeUserName$();
    this.subscribeIsToken();
    // if (token === null) return;
    // this.subscribeUser$();
    console.log("this.isToken ngOnInit: ", this.isToken);
  }

  private subscribeIsToken() {
    console.log("subscribeIsToken");
    this.currentUserService.getIsToken$.subscribe(data => {
      console.log("this.isToken subscribeIsToken: ", data);
      this.isToken = data;
    });
  }

  // private subscribeIsLogin() {
  //   console.log("subscribeIsToken");
  //   this.modalService.getIsLogin$.subscribe(data => {
  //     this.isLogin = data;
  //   });
  // }

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

  // private async addSignIn(): Promise<void> {
  //   const { LogInComponent } = await import("src/app/auth/components/log-in/log-in.component");
  //   this.modalService.setIsLogin$(true);
  //   this.modalService.open(this.modalService.modalSignInComponent);
  // }
  // private async addMyAccount(): Promise<void> {
  //   const { OpenAccountComponent } = await import(
  //     "src/app/auth/components/open-account/open-account.component"
  //   );
  //   this.modalService.open(this.modalService.modalMyAccountComponent);
  //   this.currentUserService.setUserName$(this.username);
  // }

  private setContentModal() {
    console.log(this.isToken);

    if (this.isToken) {
      console.log("isToken: ", this.isToken);
      console.log("addMyAccount()");
      this.modalService.addMyAccount();
    } else {
      console.log("isToken: ", this.isToken);
      console.log("addSignIn");
      this.modalService.setIsLogin$(true);
      this.modalService.addSignIn();
    }
  }

  public onOpenModal(): void {
    this.setContentModal();
    // this.setContentModal();
    // const { SignInComponent } = await import("src/app/shared/ui/modal/sign-in/sign-in.component");
    // this.modalService.open(this.modalService.modalSignInComponent);
    // this.modalService.setIsLogin$(true);
    // const token = this.currentUserService.getToken;

    // if (token === null) {
    //   this.addSignIn();
    // } else {
    //   this.addMyAccount();
    // }
  }

  // public onOpenModal(): void {
  //   this.modalService.open(this.createANewModalWindow);
  //   this.modalService.setIsSignUp$(false);
  //   console.log("click open");
  // }

  ngOnDestroy(): void {}
}
