import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ReservationServiceService } from '../services/reservation-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   user:any
  constructor(private reservationservice:ReservationServiceService,private userservice:UserServiceService,private route:Router,private notifyService:NotificationService) { }

  ngOnInit(): void {
    const item=this.reservationservice.getUserObj()
    for(let value of item){
      this.user=value
    }
  }
  update(name:string,email:string,password:string,phone:string)
  {
     this.userservice.updateUser(name,email,password,phone).subscribe(
       res=>{
        this.notifyService.showSuccess("successfully Updated !!", "UPDATE")
         this.route.navigate(['/home'])},
         error=>{this.notifyService.showError("Incorrect usename or password", "ERROR")}
         
     )
  }
}
