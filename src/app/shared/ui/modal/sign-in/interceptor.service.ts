import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { EMPTY, Observable, catchError, filter, map } from "rxjs";
import { LOGIN_URL_TOKEN } from "src/app/config";
// import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class Interceptor implements HttpInterceptor {
  constructor(
    @Inject(LOGIN_URL_TOKEN) private LOGIN_URL: string // private localStorage: LocalStorageService
  ) {}

  // public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   console.log(request);
  //   console.log(this.LOGIN_URL);
  //   console.log(request.url);
  //   const t =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg";
  //   // const token = this.localStorage.get("accessToken");

  //   request = request.clone({
  //     // url: `${this.LOGIN_URL}${request.url}`,
  //     setHeaders: {
  //       // Authorization: token ? `Bearer ${token}` : "",
  //       Authorization: `Bearer ${t}`,
  //     },
  //   });
  //   console.log(request);
  //   console.log(next.handle(request));

  //   return next.handle(request);
  // }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    console.log(this.LOGIN_URL);
    console.log(req.url);

    const headers: HttpHeaders = req.headers
      .append("Content-Type", "application/json")
      .append(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg`
      );

    const jsonReq = req.clone({
      url: `${this.LOGIN_URL}${req.url}`,
      headers,
    });

    return next.handle(jsonReq).pipe(
      filter(this._isHttpResponse),
      map(res => {
        console.log(res);
        console.log(res.clone({ body: res.body?.data }));

        return res.clone({ body: res.body?.data });
        // res.clone({body: res.body?data})
      }),
      catchError(() => {
        return EMPTY;
      })
    );
  }
  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    console.log(event instanceof HttpResponse);

    return event instanceof HttpResponse;
  }
}
