import { Component, OnDestroy, OnInit } from "@angular/core";
// import { Subscription } from "rxjs";
import { ModalService } from "src/app/components/modal/modal.service";
// import { SignInComponent } from "src/app/shared/ui/modal/sign-in/sign-in.component";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { EAuthStatic } from "src/app/auth/types/authStatic.enum";
import { BagService } from "../pages/bag/bag.service";
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
  public totalQuantity!: number;

  // @ViewChild("formSignIn", { read: ViewContainerRef })
  // private formSignIn!: ViewContainerRef;

  constructor(
    private modalService: ModalService,
    private currentUserService: CurrentUserService,
    // private loginService: LogInService,
    private bagService: BagService
  ) {}

  ngOnInit(): void {
    this.subscribeUserName$();
    this.subscribeIsToken();
    this.subscribeCount();
  }

  private subscribeCount() {
    this.totalQuantity = this.bagService.getTotalQuantity;

    this.bagService.getTotalQuantity$.subscribe(data => {
      this.totalQuantity = data;
    });
  }

  private subscribeIsToken() {
    this.isToken = this.currentUserService.getIsToken;

    console.log("subscribeIsToken");
    this.currentUserService.getIsToken$.subscribe(data => {
      console.log("this.isToken subscribeIsToken: ", data);
      this.isToken = data;
    });
  }

  private subscribeUserName$() {
    this.currentUserService.getUserName$.subscribe(name => {
      console.log(name);

      this.username = name;
    });
  }

  private setContentModal() {
    console.log(this.isToken);

    // if (this.isToken) {
    // this.modalService.addMyAccount();
    // } else {
    this.modalService.setIsLogin$(true);
    this.modalService.addSignIn();
    // }
  }

  public onOpenModal(): void {
    this.setContentModal();
  }

  // public onOpenModal(): void {
  //   this.modalService.open(this.createANewModalWindow);
  //   this.modalService.setIsSignUp$(false);
  //   console.log("click open");
  // }

  ngOnDestroy(): void {}
}
