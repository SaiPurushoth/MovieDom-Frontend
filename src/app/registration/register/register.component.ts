import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name=""
  constructor(private usrService:UserServiceService,private route:Router,private navservice:NavbarServiceService,private reservationservice:ReservationServiceService,private notifyService:NotificationService) { }
  username:any
  emailid:any
  userpassword:any
  userphone:any
  ngOnInit(): void {
  }
  register(name:string,email:string,password:string,phone:string){
    this.usrService.registerUser(name,email,password,phone).subscribe(
    res=>{
        this.notifyService.showInfo("Link sent to your mail","Verifiy Email")
        this.route.navigate(['/registration/login'])},

      error=>{
        console.log(error)
        this.notifyService.showError("Enter details correctly", "ERROR")}
    
    )
    }
}
