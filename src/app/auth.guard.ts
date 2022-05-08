import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './services/user-service.service';
import {JwtHelperService} from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public jwtHelper:JwtHelperService = new JwtHelperService()
  constructor(private service:UserServiceService,private router:Router){}
  canActivate():boolean{
    const token:any=localStorage.getItem('token')
  if(this.service.loggedIn() && !this.jwtHelper.isTokenExpired(token)){
   return true
  }
  else{
    this.router.navigate(['registration/login'])
    return false
  }
}
}
