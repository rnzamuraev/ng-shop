import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { CurrentUserModule } from "src/app/auth/components/current-user/current-user.module";
import { LogInModule } from "src/app/auth/components/log-in/log-in.module";
import { OpenAccountModule } from "src/app/auth/components/open-account/open-account.module";
import { reducers } from "./store/reducers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CurrentUserModule,
    LogInModule,
    OpenAccountModule,
    StoreModule.forFeature("auth", reducers),
  ],
})
export class AuthModule {}
