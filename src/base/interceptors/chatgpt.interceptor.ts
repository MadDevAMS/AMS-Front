import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CHATGPT_KEY } from '@base/environment';

@Injectable()
export class ChatgptInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = CHATGPT_KEY;
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(clonedRequest);
      return next.handle(req);
    } else {
      return next.handle(req);
    }
  }
}
