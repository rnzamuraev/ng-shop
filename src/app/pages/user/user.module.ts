import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SideBarModule } from "src/app/shared/ui/side-bar/side-bar.module";
import { UserComponent } from "src/app/pages/user/user.component";
import { UserDetailsModule } from './user-details/user-details.module'

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, SideBarModule,  UserDetailsModule],
  // exports: [UserComponent],
})
export class UserModule {}
