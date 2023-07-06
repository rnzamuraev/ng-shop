import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";
import { ModalService } from "src/app/components/modal/modal.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { EAuthStatic } from "../../types/authStatic.enum";

@Component({
  selector: "shop-open-account",
  templateUrl: "./open-account.component.html",
  styleUrls: ["./open-account.component.scss"],
})
export class OpenAccountComponent implements OnInit {
  public currentUserName: string = this.currentUserService.getUserName;
  constructor(
    private modalService: ModalService,
    private localStorageService: LocalStorageService,
    private logInService: LogInService,
    private currentUserService: CurrentUserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.subscribeGetUserName();
  }

  // private subscribeGetUserName() {
  //   // this.currentUserService.getUserName$.subscribe(name => {
  //   this.currentUserName = this.currentUserService.getUserName;
  //   // });
  // }

  public onCloseModal() {
    this.modalService.close();
  }
  public onMyAccount() {
    this.router.navigate(["/my-account"]);
    this.modalService.close();
  }
  public onMyOrders() {
    this.router.navigate(["/my-account"]);
    this.modalService.close();
  }
  public onSignOut() {
    this.localStorageService.remove(EAuthStatic.TOKEN_KEY);
    this.currentUserService.setIsToken$(false);
    this.currentUserService.setUserName$(EAuthStatic.GUEST);
    this.router.navigate(["/"]);
    this.modalService.close();
  }
}
