import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './services/user-service.service';
import {JwtHelperService} from '@auth0/angular-jwt'
import { NotificationService } from './services/notification.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public jwtHelper:JwtHelperService = new JwtHelperService()
  constructor(private service:UserServiceService,private router:Router,private notifyservice:NotificationService){}
  canActivate():boolean{
    const token:any=localStorage.getItem('token')
    const refreshtoken:any=localStorage.getItem('refreshToken')
  if(this.service.loggedIn() && !this.jwtHelper.isTokenExpired(token)){
   return true
  }
  else{
    if(this.jwtHelper.isTokenExpired(token))
    {
   this.notifyservice.showWarning("Session Experied","EXPIRED")
    }
    this.router.navigate(['registration/login'])
    return false
  }
  }


}
