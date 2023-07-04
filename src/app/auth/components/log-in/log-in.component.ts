import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
// import { LOGIN_URL, LOGIN_URL_TOKEN } from "src/app/config";
import { ModalService } from "src/app/components/modal/modal.service";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
// import { Interceptor } from "./interceptor.service";
import { Store } from "@ngrx/store";
import { SignUpAction } from "src/app/auth/store/actions/sign-up.action";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";

// export interface IFormContent {
//   title: string;
//   btn: string;
//   span: string[];
// }

// export interface IIsValid {
//   email: boolean;
//   pass: boolean;
// }

@Component({
  selector: "shop-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"],
})
export class LogInComponent implements OnInit, OnDestroy {
  private unsubscribeGetIsSignUp$!: Subscription;
  private tokenKey = this.logInService.getTokenKey;
  public unacceptableSymbols = "(+,\"=.№{|}?`;'~[/]):\\_-";
  public isNotUser = false;
  public isLogin = true;
  public isValidEmail: boolean | undefined = false;
  public isValidPass: boolean | undefined = false;
  public formSignIn!: FormGroup;
  public formSignUp!: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private logInService: LogInService,
    // private currentUserService: CurrentUserService,
    private localStorage: LocalStorageService,
    private router: Router,
    private store: Store
  ) {}

  onInput() {
    this.isValidEmail = this.formSignIn.get("email")?.valid;
    console.log(this.isValidEmail);
  }

  public ngOnInit(): void {
    this.subscribeGetIsSignUp$();

    this.initFormSignIn();
  }

  private subscribeGetIsSignUp$() {
    this.unsubscribeGetIsSignUp$ = this.modalService.getIsLogin$.subscribe(boolean => {
      console.log(this.isLogin);
      this.isLogin = boolean;
    });
  }
  // *** FormSingUp *** //
  private initFormSignUp(): void {
    this.formSignUp = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[^@\s]+@[^@\s][\w]+\.[a-z]{2,}$/i),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])[^(+,"=.№{|}?`;'~[/\]):\\_-]{6,}$/),
      ]),
      name: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-z][a-z]+[ _]?[A-Z]*$/i),
      ]),
    });
  }

  // *** FormSingIn *** //
  private initFormSignIn(): void {
    this.formSignIn = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s][\w]+\.[a-z]{2,}$/i)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  private initForms() {
    if (this.isLogin) this.initFormSignIn();
    else this.initFormSignUp();
  }

  public onSubmitSignIn(): void {
    this.logInService.postSignIn(this.formSignIn.value).subscribe(user => {
      console.log(user);
      if (typeof user === "number") this.isNotUser = true;
      else {
        this.isNotUser = false;
        this.localStorage.set(this.tokenKey, user.access_token);
        // this.localStorage.set(this.currentUserService.getUserInfoKey, { user: false });

        this.router.navigate(["/my-account"]);
      }
    });
    this.modalService.close();
    this.resetForm();
  }
  public onSubmitSignUp(): void {
    console.log(this.formSignUp.value);
    console.log(this.formSignUp);
    console.log(this.formSignUp.valid);

    this.store.dispatch(ChangeTheEmailAction({ email: this.formSignUp.value.email }));

    this.store.dispatch(SignUpAction(this.formSignUp.value));
    this.resetForm();
  }

  // *** CloseModal *** //
  // public onCloseModal!: () => void;
  public onCloseModal(): void {
    this.modalService.close();
    this.resetForm();
  }

  private resetForm() {
    if (this.isLogin) this.formSignIn.reset();
    else this.formSignUp.reset();
  }

  // *** ToggleForms *** //
  public onOpenNewForm(): void {
    this.isLogin = !this.isLogin;

    this.initForms();
    // this.isValid = false;
  }

  public ngOnDestroy(): void {
    // this.unsubscribeGetIsSignUp$.unsubscribe();
  }
}
function ChangeTheEmailAction(value: any): any {
  throw new Error("Function not implemented.");
}
