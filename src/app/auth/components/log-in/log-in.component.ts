import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
// import { LOGIN_URL, LOGIN_URL_TOKEN } from "src/app/config";
import { ModalService } from "src/app/components/modal/modal.service";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
// import { Interceptor } from "./interceptor.service";
import { Store } from "@ngrx/store";
import { CurrentUserService } from "src/app/auth/components/current-user/current-user.service";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";
// import { SignUpAction } from "src/app/auth/store/actions/sign-up.action";
import { ICreateUserRequest, IUserRequest, IUserResponse } from "src/app/auth/types/auth.interface";
import { EAuthStatic } from "../../types/authStatic.enum";

@Component({
  selector: "shop-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.scss"],
})
export class LogInComponent implements OnInit, OnDestroy {
  private unsubscribeGetIsSignUp$!: Subscription;
  // private tokenKey = this.logInService.getTokenKey;
  public isNotUser = false;
  public isLogin = this.modalService.getIsLogin;
  public isEmail = true;
  // public isValidEmail: boolean | undefined = false;
  // public isValidPass: boolean | undefined = false;
  public formSignIn!: FormGroup;
  public formSignUp!: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private loginService: LogInService,
    private currentUserService: CurrentUserService,
    private localStorage: LocalStorageService,
    private router: Router,
    private store: Store
  ) {}

  // onInput() {
  //   this.isValidEmail = this.formSignIn.get("email")?.valid;
  //   console.log(this.isValidEmail);
  // }

  public ngOnInit(): void {
    console.log("ngOnInit form");
    this.subscribeGetIsLogin$();
    this.initForms();
  }

  private subscribeGetIsLogin$(): void {
    this.modalService.getIsLogin$.subscribe(boolean => {
      console.log(this.isLogin);
      console.log(boolean);
      this.isLogin = boolean;
    });
  }

  // *** FormSingUp *** //
  private initFormSignUp(): void {
    this.formSignUp = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s][\w]+\.[a-z]{2,}$/i)]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])[^(+,"=.№{|}?`;'~[/\]):\\_-]{6,}$/),
        ],
      ],
      name: ["", [Validators.required, Validators.pattern(/^[a-z][a-z]+[ _]?[A-Z]*$/i)]],
      avatar: [""],
    });
    console.log("formSignUp");
  }

  // *** FormSingIn *** //
  private initFormSignIn(): void {
    this.formSignIn = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s][\w]+\.[a-z]{2,}$/i)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
    console.log("formSignIn");
  }

  private initForms(): void {
    this.initFormSignUp();
    this.initFormSignIn();
  }

  private subscribePostSignIn(data: IUserRequest): void {
    this.loginService.postSignIn(data).subscribe(res => {
      console.log(res);
      if (typeof res === "number") this.isNotUser = true;
      else {
        console.log(res.access_token);
        this.isNotUser = false;
        this.localStorage.set(EAuthStatic.TOKEN_KEY, res.access_token);
        this.currentUserService.setIsToken$(true);
        // this.currentUserService.setToken$(res.access_token);
        // this.currentUserService.getToken;
        this.currentUserService.fetchUser().subscribe(res => {
          this.openMyAccount(res);
          console.log(res);
        });
      }
    });
  }

  public onSubmitSignIn(): void {
    this.subscribePostSignIn(this.formSignIn.value);
  }

  private subscribePostSignUp(data: ICreateUserRequest): void {
    const email = this.formSignUp.value.email;
    const pass = this.formSignUp.value.password;
    console.log(this.formSignUp.value);

    this.loginService.postSignUp(data).subscribe(res => {
      console.log(res);

      if (typeof res !== "number") {
        const formData = {
          email: email,
          password: pass,
        };
        // console.log(res);
        // console.log(data);

        // this.subscribeSignIn(data);
        this.isNotUser = false;
        this.openMyAccount(res); // ***
        // this.currentUserService.user = res;
        // this.currentUserService.setUser$(res);

        // this.router.navigate(["/my-account"]);
        // this.modalService.close();
        // this.resetForm();
        this.loginService.postSignIn(formData).subscribe(res => {
          console.log(res);
          if (typeof res === "number") this.isNotUser = true;
          else {
            this.localStorage.set(EAuthStatic.TOKEN_KEY, res.access_token);
            this.currentUserService.setIsToken$(true);
            // this.currentUserService.setToken$(res.access_token);
          }
        });
      }
    });
  }

  public onSubmitSignUp(): void {
    this.formSignUp.value.avatar = EAuthStatic.AVATAR;
    this.subscribePostSignUp(this.formSignUp.value);
    // this.store.dispatch(ChangeTheEmailAction({ email: this.formSignUp.value.email }));
    // this.store.dispatch(SignUpAction(this.formSignUp.value));
  }

  // *** CloseModal *** //
  // public onCloseModal!: () => void;
  public onCloseModal(): void {
    this.modalService.close();
    this.resetForm();
  }

  private resetForm(): void {
    if (this.isLogin) this.formSignIn.reset();
    else this.formSignUp.reset();
  }

  private openMyAccount(data: IUserResponse) {
    this.currentUserService.setCurrentUser$(data);
    // this.currentUserService.setUser$(data);
    this.currentUserService.setUserName$(data.name);

    this.router.navigate(["/my-account"]);
    this.modalService.close();
    this.resetForm();
  }

  // *** ToggleForms *** //
  public onOpenNewForm(): void {
    this.isLogin = !this.isLogin;

    // this.initForms();
    // this.isValid = false;
  }

  public ngOnDestroy(): void {
    // this.unsubscribeGetIsSignUp$.unsubscribe();
    console.log("ngOnDestroy");
  }
}
