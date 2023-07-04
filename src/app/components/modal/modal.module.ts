import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SideBarModule } from "../../shared/ui/side-bar/side-bar.module";
import { ModalComponent } from "./modal.component";
import { LogInModule } from "src/app/auth/components/log-in/log-in.module";
import { OpenAccountModule } from "src/app/auth/components/open-account/open-account.module";

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, SideBarModule, LogInModule, OpenAccountModule],
  exports: [ModalComponent],
})
export class ModalModule {}
