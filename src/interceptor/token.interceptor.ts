import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public auth: AuthService
  ){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // if (request.url.indexOf("/auth") < 0) {
    //   let data:any = this.auth.getToken();

      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin' : '*',
        }
      });

    // }
    
    return next.handle(request);

  }
}