import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, isDevMode } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";

import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { BASE_URL, BASE_URL_TOKEN, LOGIN_URL, LOGIN_URL_TOKEN } from "./config";
import { PagesModule } from "./pages/pages.module";
import { PipeModule } from "./pipe/pipe.module";
import { SharedModule } from "./shared/shared.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ComponentsModule,
    SharedModule,
    PagesModule,
    PipeModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // Store,
  ],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL,
      multi: true,
    },
    {
      provide: LOGIN_URL_TOKEN,
      useValue: LOGIN_URL,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomInterceptorService,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Interceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
