import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./modal.component";
import { SideBarModule } from "../side-bar/side-bar.module";
import { SignInModule } from "./sign-in/sign-in.module";
import { MyAccountModule } from "./my-account/my-account.module";

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, SideBarModule, SignInModule, MyAccountModule],
  exports: [ModalComponent, SignInModule],
})
export class ModalModule {}
