import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { ApiConfig, API_CONFIG } from './api-config';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor
{
  constructor(@Inject(API_CONFIG) private config: ApiConfig)
  {
  }

  intercept(req: HttpRequest<any>, @Inject(HttpHandler) next: HttpHandler)
  {
    const token = this.config.apiKey;
    if (token != null)
    {
      return next.handle(req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token,
          'content-type': 'application/json'
        }
      }));
    }
    else
    {
      return next.handle(req);
    }
  }
}
