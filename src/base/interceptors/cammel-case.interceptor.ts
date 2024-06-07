import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponse, IErrorResponse } from '@base/response';
import { map } from 'rxjs/operators';
import camelcaseKeys from 'camelcase-keys';
import camelcase from 'camelcase';

@Injectable()
export class CamelCaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse && event.body) {
          const camelCaseBody = camelcaseKeys(event.body, { deep: true });
          let camelCaseEvent = event.clone({ body: camelCaseBody })
          const response = camelCaseEvent.body as IApiResponse<any>
          if (response && response.errors?.length) {
            const errorsCamelCase = response.errors.map(e => ({
              propertyName: camelcase(e.propertyName),
              errorMessage: e.errorMessage
            }) as IErrorResponse)
            camelCaseEvent = camelCaseEvent.clone({ body: {
              ...camelCaseBody,
              errors: errorsCamelCase
            } })
          }
          return camelCaseEvent
        }
        return event;
      })
    );
  }
}
