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
import { BASE_URL_TOKEN } from "src/app/config";

@Injectable({
  providedIn: "root",
})
export class CustomInterceptorService implements HttpInterceptor {
  constructor(@Inject(BASE_URL_TOKEN) private BASE_URL: string) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    console.log(this.BASE_URL);
    console.log(req.url);

    const headers: HttpHeaders = req.headers
      .append("Content-Type", "application/json")
      .append(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg`
      );

    const jsonReq = req.clone({
      url: `${this.BASE_URL}${req.url}`,
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
