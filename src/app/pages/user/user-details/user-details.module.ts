import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoadingModule } from "src/app/shared/ui/loading/loading.module";
import { MyDetailsModule } from "./my-details/my-details.module";
import { UserDetailsComponent } from "./user-details.component";

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule, LoadingModule, RouterModule, MyDetailsModule],
  exports: [UserDetailsComponent],
})
export class UserDetailsModule {}
