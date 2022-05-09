import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ReservationServiceService } from './reservation-service.service';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import {JwtHelperService} from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public jwtHelper:JwtHelperService = new JwtHelperService()
 
  constructor(private http: HttpClient,private reservationservice:ReservationServiceService,private router:Router,private notifyservice:NotificationService) { }

  loginUser(email:string, password:string):Observable<any> {
    const url = 'http://localhost:9000/users/login';
    const obj = { 
      email: email, 
      password: password 
    }; 
    return this.http.post(url, obj)
  }
  listUser(){
    const url = 'http://localhost:9000/users/list';
    return this.http.get(url)
  }
  registerUser(name:string,email:string,password:string,phone:string):Observable<any>{
    const url = 'http://localhost:9000/users/register';
    const obj = { 
      name:name,
      email: email, 
      password: password ,
      phone:phone

    };
    return this.http.post(url, obj)
  }
updateUser(name:string,email:string,password:string,phone:string){
    const url = 'http://localhost:9000/users/update/'+localStorage.getItem('id');
    const obj = { 
      name:name,
      email: email, 
      password: password ,
      phone:phone

    };
    return this.http.post(url, obj)
  }

loggedIn(){
  const tok=localStorage.getItem('token')
  return !!tok && !this.jwtHelper.isTokenExpired(tok)
  
}
logoutUser(){
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  localStorage.removeItem('admin')
  this.notifyservice.showSuccess("successfully logged-out!!", "BYE!!")
  this.router.navigate(['registration/login'])
}
getToken(){
  return localStorage.getItem('token')
}
isAdmin()
{
  return !!localStorage.getItem('admin')
}

}
