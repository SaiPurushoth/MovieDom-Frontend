import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ReservationServiceService } from './reservation-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  constructor(private http: HttpClient,private reservationservice:ReservationServiceService,private router:Router) { }

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
     const userId=this.reservationservice.getUserId()
    const url = 'http://localhost:9000/users/update/'+userId;
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
  this.router.navigate(['registration/login'])
}
getToken(){
  return localStorage.getItem('token')
}

}
