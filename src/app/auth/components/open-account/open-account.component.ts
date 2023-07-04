import { Component } from "@angular/core";
import { ModalService } from "src/app/components/modal/modal.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
// import { LogInService } from "src/app/auth/components/log-in/log-in.service";

@Component({
  selector: "shop-open-account",
  templateUrl: "./open-account.component.html",
  styleUrls: ["./open-account.component.scss"],
})
export class OpenAccountComponent {
  constructor(
    private modalService: ModalService,
    private localStorageService: LocalStorageService
  ) // private logInService: LogInService
  {}

  public onCloseModal() {
    this.modalService.close();
  }
  public onSignOut() {
    // this.localStorageService.remove(this.logInService.getTokenKey);
  }
}
