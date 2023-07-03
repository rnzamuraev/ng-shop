import { Component } from "@angular/core";
import { LocalStorageService } from 'src/app/shared/services/local-storage.service'
import { ModalService } from "src/app/shared/ui/modal/modal.service";
import { SignInService } from '../sign-in/sign-in.service'

@Component({
  selector: "shop-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent {
  constructor(
    private modalService: ModalService,
    private localStorageService: LocalStorageService,
    private signInService: SignInService
  ) {}

  public onCloseModal() {
    this.modalService.close();
  }
  public onSignOut() {
    this.localStorageService.remove(this.signInService.getTokenKey);
  }
}
