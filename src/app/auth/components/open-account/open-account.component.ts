import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";
import { ModalService } from "src/app/components/modal/modal.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

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
    this.router.navigate(["/my-account"]);
    this.modalService.close();
  }
  public onSignOut() {
    this.localStorageService.remove(this.logInService.getTokenKey);
    this.currentUserService.setUserName$(this.currentUserService.getUserGuest);
    this.router.navigate(["/"]);
    this.modalService.close();
  }
}
