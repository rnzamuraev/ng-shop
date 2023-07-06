import { DOCUMENT } from "@angular/common";
import { ComponentRef, Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { LogInComponent } from "src/app/auth/components/log-in/log-in.component";
import { OpenAccountComponent } from "src/app/auth/components/open-account/open-account.component";
import { ICreateANewModal } from "src/app/components/modal/modal.interface";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private control$ = new Subject<null | ICreateANewModal>();
  private modalRef$ = new Subject<ComponentRef<LogInComponent | OpenAccountComponent>>();
  private isLogin = true;
  private isLogin$ = new Subject<boolean>();
  // private modalSignInComponent = {
  //   component: LogInComponent,
  //   context: {
  //     // isLogin: false,
  //     // onCloseModal: () => {
  //     //   this.close();
  //     // },
  //   },
  // };
  // private modalMyAccountComponent = {
  //   component: OpenAccountComponent,
  //   context: {},
  // };

  private calcWidthScrollBar() {
    const div = this.document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    this.document.body.appendChild(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    return scrollWidth;
  }

  private overflowOff() {
    this.document.body.style.overflow = "";
    this.document.body.style.paddingRight = `0`;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private currentUserService: CurrentUserService
  ) {}

  public overflowOn() {
    this.document.body.style.overflow = "hidden";
    this.document.body.style.paddingRight = `${this.calcWidthScrollBar()}px`;
  }

  public get modalSequence$() {
    return this.control$.asObservable();
  }

  public open(data: ICreateANewModal) {
    this.control$.next(data);
  }

  public close() {
    this.control$.next(null);
    this.overflowOff();
    this.modalRef$.forEach(modal => modal.destroy());
  }

  public get modalViewContentRef() {
    return this.modalRef$.asObservable();
  }

  public setModalViewContentRef(data: ComponentRef<LogInComponent | OpenAccountComponent>) {
    this.modalRef$.next(data);
  }

  //  *** IsLogin *** //
  public get getIsLogin() {
    return this.isLogin;
  }
  public get getIsLogin$() {
    return this.isLogin$.asObservable();
  }
  public setIsLogin$(data: boolean) {
    this.isLogin$.next(data);
    this.isLogin = data;
    console.log("isLogin: ", data);
  }

  public async addSignIn(): Promise<void> {
    const { LogInComponent } = await import("src/app/auth/components/log-in/log-in.component");
    // this.open(this.modalSignInComponent);
    this.open({
      component: LogInComponent,
      context: {},
    });
  }
  // public async addMyAccount(): Promise<void> {
  //   const { OpenAccountComponent } = await import(
  //     "src/app/auth/components/open-account/open-account.component"
  //   );
  //   // this.open(this.modalMyAccountComponent);
  //   this.open({
  //     component: OpenAccountComponent,
  //     context: {},
  //   });
  //   this.currentUserService.setUserName$(this.currentUserService.getUserName);
  // }
}
