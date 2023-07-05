import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import {
  ISaveChangeRequest,
  IHttpErrorResponse,
  IUserResponse,
} from "src/app/auth/types/auth.interface";
import { LOGIN_URL } from "src/app/config";

@Injectable({
  providedIn: "root",
})
export class MyDetailsService {
  constructor(private http: HttpClient) {}

  public putSaveChange(data: ISaveChangeRequest, id: number): Observable<IUserResponse | number> {
    return this.http.put<IUserResponse>(`${LOGIN_URL}/api/v1/users/${id}`, data).pipe(
      catchError((err: IHttpErrorResponse) => {
        console.error(err);
        return of(err.status);
      })
    );
  }
}
