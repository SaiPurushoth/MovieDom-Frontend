import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:UserServiceService,private router:Router){}
  canActivate():boolean{
  if(this.service.loggedIn()){
   return true
  }
  else{
    this.router.navigate(['registration/login'])
    return false
  }
}
}
