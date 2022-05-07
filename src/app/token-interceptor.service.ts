import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from './services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(UserServiceService)
    let tokenizedreq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.getToken()}`
      }
    })

    return next.handle(tokenizedreq)
  }

}
