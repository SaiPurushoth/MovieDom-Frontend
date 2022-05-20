import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { UserServiceService } from './services/user-service.service';
import {JwtHelperService} from '@auth0/angular-jwt'
import { NotificationService } from './services/notification.service';
import { api } from './environmentVariables';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public jwtHelper:JwtHelperService = new JwtHelperService()
  constructor(private service:UserServiceService,private router:Router,private notifyservice:NotificationService,private http:HttpClient){}
  async canActivate():Promise<boolean>{
    const token:any=localStorage.getItem('token')
  
  if(this.service.loggedIn() && !this.jwtHelper.isTokenExpired(token)){
   return true
  }

  const isRefreshSuccess = await this.refreshingTokens();
      if (!isRefreshSuccess) {
        this.router.navigate(['registration/login'])
      }
    return isRefreshSuccess
  }

  private async refreshingTokens(): Promise<boolean> {
    const refreshtoken:any=localStorage.getItem('refreshToken')
    let success:boolean
    try {
    const response = await lastValueFrom(this.http.get(api.backend+'/users/refresh/'+refreshtoken))
    const newToken = (<any>response).token
    localStorage.setItem("token", newToken);
    this.notifyservice.showInfo('token renewed',"SUCCESS")
    success = true;
    }
    catch(err){
      console.log(err)
     success=false;
    }
    return success

  }

}
