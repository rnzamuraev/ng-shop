import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";
import { IUserResponse } from "src/app/auth/types/auth.interface";
import { LOGIN_URL } from "src/app/config";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { EAuthStatic } from "../../types/authStatic.enum";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService implements OnInit {
  // private userGuest: string = "Guest";
  // private token!: string;
  // private token$ = new Subject<string>();
  private isToken = false;
  private isToken$ = new Subject<boolean>();
  // private tokenKey = this.logInService.getTokenKey;
  // private userInfoKey = "_user-info_";
  // private currentUser!: IUserResponse | null;
  private currentUser$ = new Subject<IUserResponse>();
  private username: string = "";
  private username$ = new Subject<string>();
  private userHeight!: string;
  private userHeight$ = new Subject<string>();

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private logInService: LogInService
  ) {}

  ngOnInit(): void {}

  // *** fetchUser *** //
  public fetchUser(): Observable<IUserResponse> {
    const token = this.localStorage.get(EAuthStatic.TOKEN_KEY);
    // if (typeof token === "string") {
    return this.http.get<IUserResponse>(`${LOGIN_URL}/api/v1/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // }
  }

  // *** UserHeight *** //
  public get getInitUserHeight() {
    console.log("user: ", this.userHeight);
    return this.userHeight;
  }
  public get getUserHeight$() {
    console.log("user: ", this.userHeight);
    return this.userHeight$.asObservable();
  }
  public setUserHeight$(height: string) {
    this.userHeight$.next(height);
    this.userHeight = height;
    console.log("user: ", height);
  }

  // *** CurrentUser *** //
  // public get getCurrentUser() {
  //   console.log("user: ", this.currentUser);
  //   return this.currentUser;
  // }
  public get getCurrentUser$() {
    // console.log("user: ", this.currentUser);
    return this.currentUser$.asObservable();
  }
  public setCurrentUser$(user: IUserResponse) {
    this.currentUser$.next(user);
    // this.currentUser = user;
    console.log("user: ", user);
  }

  //  *** UserName *** //
  public get getUserName() {
    console.log("username: ", this.username);
    return this.username;
  }
  public get getUserName$() {
    console.log("username: ", this.username);
    return this.username$.asObservable();
  }
  public setUserName$(username: string) {
    this.username$.next(username);
    this.username = username;
    console.log("username: ", username);
  }

  // public setUserName(username: string) {
  //   console.log(username);
  //   this.username = username;
  // }

  // *** IsToken *** //
  public get getIsToken(): boolean {
    console.log("isToken", this.isToken);
    return this.isToken;
  }
  public get getIsToken$(): Observable<boolean> {
    console.log("isToken", this.isToken);

    return this.isToken$.asObservable();
  }
  public setIsToken$(data: boolean): void {
    this.isToken$.next(data);
    this.isToken = data;
    console.log("isToken", data);
  }

  // // *** Token *** //
  // public get getToken(): string {
  //   console.log("token: ", this.token);
  //   return this.token;
  // }
  // public get getToken$(): Observable<string | null> {
  //   const token: string | null = this.localStorage.get(EAuthStatic.TOKEN_KEY);
  //   console.log("token: ", token);

  //   if (token === null) {
  //     this.setIsToken$(false);
  //     return of(null);
  //   }

  //   this.setIsToken$(true);
  //   this.token = token;
  //   return of(token);
  // }
  // public setToken$(data: string): void {
  //   this.token$.next(data);
  //   // this.token = data;
  //   this.localStorage.set(EAuthStatic.TOKEN_KEY, data);
  //   console.log("token: ", data);
  //   this.setIsToken$(true);
  // }

  // public get getUserInfoKey(): string {
  //   return this.userInfoKey;
  // }

  // ***********

  // public get getUserInfo(): boolean | null {
  //   const userInfo = this.localStorage.get(this.userInfoKey);
  //   console.log(userInfo);

  //   console.log(userInfo.user);
  //   return userInfo.user;
  // }
  // public get getUserGuest(): string {
  //   return this.userGuest;
  // }
}
