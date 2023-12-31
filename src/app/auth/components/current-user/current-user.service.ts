import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { LOGIN_URL } from "src/app/config";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { IUserResponse } from "src/app/auth/types/auth.interface";
import { LogInService } from "src/app/auth/components/log-in/log-in.service";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService implements OnInit {
  private token!: string;
  private tokenKey = this.logInService.getTokenKey;
  private userInfoKey = "_user-info_";
  private user$ = new Subject<IUserResponse>();
  private userName$ = new Subject<string>();
  private username!: string;
  private userGuest: string = "Guest";
  public user!: IUserResponse;
  private userHeight$ = new Subject<string>();
  public initUserHeight!: string;

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private logInService: LogInService
  ) {}

  ngOnInit(): void {}

  // *******
  public fetchUser(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${LOGIN_URL}/api/v1/auth/profile`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  public get getInitUserHeight() {
    return this.initUserHeight;
  }
  public setInitUserHeight(height: string) {
    this.initUserHeight = height;
  }

  public get getUserHeight$() {
    return this.userHeight$.asObservable();
  }
  public setUserHeight$(height: string) {
    this.userHeight$.next(height);
  }

  public get getUser$() {
    return this.user$.asObservable();
  }
  public setUser$(user: IUserResponse) {
    this.user$.next(user);
  }

  public get getUserName$() {
    return this.userName$.asObservable();
  }
  public setUserName$(username: string) {
    console.log(username);
    this.userName$.next(username);
  }

  public get getUserName() {
    return this.username;
  }
  public setUserName(username: string) {
    console.log(username);
    this.username = username;
  }

  public get getToken(): string | null {
    const token: string | null = this.localStorage.get(this.tokenKey);
    if (token === null) return null;

    this.token = token;
    return token;
  }

  public get getUserInfoKey(): string {
    return this.userInfoKey;
  }

  // ***********

  public get getUserInfo(): boolean | null {
    const userInfo = this.localStorage.get(this.userInfoKey);
    console.log(userInfo);

    console.log(userInfo.user);
    return userInfo.user;
  }
  public get getUserGuest(): string {
    return this.userGuest;
  }
}
