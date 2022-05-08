import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ReservationServiceService } from './reservation-service.service';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  constructor(private http: HttpClient,private reservationservice:ReservationServiceService,private router:Router,private notifyservice:NotificationService) { }

  loginUser(email:string, password:string):Observable<any> {
    const url = 'http://localhost:9000/users/login';
    const obj = { 
      email: email, 
      password: password 
    }; 
    return this.http.post(url, obj)
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
  return !!localStorage.getItem('token')
  
}
logoutUser(){
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  this.notifyservice.showSuccess("successfully logged-out!!", "BYE!!")
  this.router.navigate(['registration/login'])
}
getToken(){
  return localStorage.getItem('token')
}

}
