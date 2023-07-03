import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, catchError, of } from "rxjs";
import { LOGIN_URL } from "src/app/config";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import {
  ICheckTheEmailRequest,
  IHttpErrorResponse,
  IUserRequest,
  INewUserRequest,
  IUserResponse,
  ITokenResponse,
} from "./sign-in.interface";

@Injectable({
  providedIn: "root",
})
export class SignInService {
  private tokenKey = "access_token";

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  public get getTokenKey(): string {
    return this.tokenKey;
  }

  // *** Sign In *** //
  // public postSignIn(body: IUser): Observable<Object | IToken | number> {
  public postSignIn(body: IUserRequest): Observable<ITokenResponse | number> {
    return this.http.post<ITokenResponse>(`${LOGIN_URL}/api/v1/auth/login`, body).pipe(
      catchError((err: IHttpErrorResponse) => {
        console.error(err.message);
        console.log(err);
        return of(err.status);
      })
    );
  }

  // *** Sign Up *** //
  public postSignUp(body: INewUserRequest): Observable<IUserResponse | number> {
    // return this.http.post(`${LOGIN_URL}/api/v1/auth/login`, body).pipe();
    return this.http.post<IUserResponse>(`${LOGIN_URL}/api/v1/users/`, body).pipe(
      catchError((err: IHttpErrorResponse) => {
        return of(err.status);
      })
    );
  }

  // *** check the email *** //
  public postCheckTheEmail(body: ICheckTheEmailRequest): Observable<boolean> {
    return this.http.post<boolean>(`${LOGIN_URL}/api/v1/users/is-available`, body);
  }

  // public checkTheEmail(email: ICheckTheEmail): Observable<boolean> {
  //   return this.http.post<boolean>(`${LOGIN_URL}/api/v1/users/is-available`, email );
  // }
}
