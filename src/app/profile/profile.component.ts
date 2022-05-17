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
   username:any
   emailid:any
   userpassword:any
   userphone:any
  constructor(private reservationservice:ReservationServiceService,private userservice:UserServiceService,private route:Router,private notifyService:NotificationService) { }

  ngOnInit(): void {
   this.userservice.getUser().subscribe(
     res=>{this.user=res},
     error=>{this.notifyService.showError("Try Again", "ERROR")
     this.route.navigate(['/home'])}
   )
  }
  update(name:string,email:string,password:string,phone:string)
  {
     this.userservice.updateUser(name,email,password,phone).subscribe(
       res=>{
        this.notifyService.showSuccess("successfully Updated !!", "UPDATE")
         this.route.navigate(['/home'])},
         error=>{this.notifyService.showError("Incorrect value Entered", "ERROR")}
         
     )
  }
}
