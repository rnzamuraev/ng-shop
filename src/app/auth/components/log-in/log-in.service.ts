import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { LOGIN_URL } from "src/app/config";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import {
  ICheckTheEmailRequest,
  ICheckTheEmailResponse,
  ICreateUserRequest,
  IHttpErrorResponse,
  ITokenResponse,
  IUserRequest,
  IUserResponse,
} from "../../types/auth.interface";

@Injectable({
  providedIn: "root",
})
export class LogInService {
  constructor(private http: HttpClient, private localStorage: LocalStorageService) {}

  // *** Sign In *** //
  public postSignIn(body: IUserRequest): Observable<ITokenResponse | number> {
    return this.http.post<ITokenResponse>(`${LOGIN_URL}/api/v1/auth/login`, body).pipe(
      catchError((err: IHttpErrorResponse) => {
        console.error(err);
        return of(err.status);
      })
    );
  }

  // *** Sign Up *** //
  public postSignUp(body: ICreateUserRequest): Observable<IUserResponse | number> {
    return this.http.post<IUserResponse>(`${LOGIN_URL}/api/v1/users/`, body).pipe(
      catchError((err: IHttpErrorResponse) => {
        console.error(err);
        return of(err.status);
      })
    );
  }

  // *** check the email *** //
  public postCheckTheEmail(body: ICheckTheEmailRequest): Observable<ICheckTheEmailResponse> {
    return this.http.post<ICheckTheEmailResponse>(`${LOGIN_URL}/api/v1/users/is-available`, body);
  }
}
