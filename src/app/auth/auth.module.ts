import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CurrentUserModule } from "src/app/auth/components/current-user/current-user.module";
import { LogInModule } from 'src/app/auth/components/log-in/log-in.module'
import { OpenAccountModule } from "src/app/auth/components/open-account/open-account.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, CurrentUserModule, LogInModule, OpenAccountModule],
})
export class AuthModule {}
