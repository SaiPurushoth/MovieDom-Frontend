import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ReservationServiceService } from './reservation-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
  constructor(private http: HttpClient,private reservationservice:ReservationServiceService) { }

  loginUser(email:string, password:string):Observable<any> {
    const url = 'http://localhost:9000/users/login';
    const obj = { 
      email: email, 
      password: password 
    }; 
    return this.http.post(url, obj)
  }

  registerUser(name:string,email:string,password:string,phone:string){
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
     const user=this.reservationservice.getUserObj()
     let userId
     for(let item of user)
     { 
       userId=item.__id
     }
    const url = 'http://localhost:9000/users/update/'+userId;
    const obj = { 
      name:name,
      email: email, 
      password: password ,
      phone:phone

    };
    return this.http.post(url, obj)
  }

}
