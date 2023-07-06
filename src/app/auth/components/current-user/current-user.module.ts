import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SideBarModule } from "src/app/shared/ui/side-bar/side-bar.module";
import { CurrentUserComponent } from "src/app/auth/components/current-user/current-user.component";
import { UserDetailsModule } from "src/app/auth/components/current-user/user-details/user-details.module";
import { ModalModule } from "src/app/components/modal/modal.module";

@NgModule({
  declarations: [CurrentUserComponent],
  imports: [CommonModule, SideBarModule, UserDetailsModule, ModalModule],
  // exports: [UserComponent],
})
export class CurrentUserModule {}
