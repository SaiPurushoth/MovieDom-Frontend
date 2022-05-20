import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ReservationServiceService } from './reservation-service.service';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import {JwtHelperService} from '@auth0/angular-jwt'
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { api } from '../environmentVariables';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public jwtHelper:JwtHelperService = new JwtHelperService()

  constructor(private http: HttpClient,private reservationservice:ReservationServiceService,private router:Router,private notifyservice:NotificationService) { }

  loginUser(email:string, password:string):Observable<any> {
    const url = api.backend+'/users/login';
    const obj = { 
      email: email, 
      password: password 
    }; 
    return this.http.post(url, obj)
  }

  listUser():Observable<any>{
    const url = api.backend+'/users/list';
    return this.http.get(url)
  }

  registerUser(name:string,email:string,password:string,phone:string):Observable<any>{
    const url = api.backend+'/users/register';
    const obj = { 
      name:name,
      email: email, 
      password: password ,
      phone:phone

    };
    return this.http.post(url, obj)
  }

  getUser(){
    const id=localStorage.getItem('id')
    const url = api.backend+'/users/one/'+id;
    return this.http.get(url)

  }
updateUser(name:string,email:string,password:string,phone:string){
    const url = api.backend+'/users/update/'+localStorage.getItem('id');
    const obj = { 
      name:name,
      email: email, 
      password: password ,
      phone:phone

    };
    return this.http.patch(url, obj)
  }

loggedIn(){
  const tok=localStorage.getItem('token')
  return !!tok && !this.jwtHelper.isTokenExpired(tok)
  
}
logoutUser(){
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  localStorage.removeItem('role')
  localStorage.removeItem('refreshToken')
  this.notifyservice.showSuccess("successfully logged-out!!", "BYE!!")
  this.router.navigate(['registration/login'])
}
getToken(){
  return localStorage.getItem('token')
}
isAdmin()
{
 if(localStorage.getItem('role')=='admin')
 {
   return true;
 }
 else
 {
   return false;
 }
}

changeAdmin(id:any){
  const url = api.backend+'/users/makeAdmin/'+id;
  return this.http.get(url)
}

getRefreshToken(token:any):Observable<any>{

const url = api.backend+'/users/refresh/'+token;
return this.http.get(url)
}
}
