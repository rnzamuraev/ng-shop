import { DOCUMENT } from "@angular/common";
import { ComponentRef, Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ICreateANewModal } from "src/app/shared/ui/modal/modal.interface";
import { SignInComponent } from "src/app/shared/ui/modal/sign-in/sign-in.component";
import { MyAccountComponent } from "./my-account/my-account.component";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private control$ = new Subject<null | ICreateANewModal>();
  private modalRef$ = new Subject<ComponentRef<SignInComponent | MyAccountComponent>>();
  private isLogin$ = new Subject<boolean>();
  public modalSignInComponent = {
    component: SignInComponent,
    context: {
      // isLogin: false,
      // onCloseModal: () => {
      //   this.close();
      // },
    },
  };
  public modalMyAccountComponent = {
    component: MyAccountComponent,
    context: {},
  };

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

  constructor(@Inject(DOCUMENT) private document: Document) {}

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

  public setModalViewContentRef(data: ComponentRef<SignInComponent | MyAccountComponent>) {
    this.modalRef$.next(data);
  }

  public get getIsLogin$() {
    return this.isLogin$.asObservable();
  }
  public setIsLogin$(data: boolean) {
    this.isLogin$.next(data);
  }
}
