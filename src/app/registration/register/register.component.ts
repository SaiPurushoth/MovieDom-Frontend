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

  ngOnInit(): void {
  }
  register(name:string,email:string,password:string,phone:string){
    this.usrService.registerUser(name,email,password,phone).subscribe(
    res=>{

        this.navservice.log=true
        this.navservice.unlog=false
        localStorage.setItem('id',res.id)
        localStorage.setItem('token',res.token)

        this.notifyService.showSuccess("successfully Registered !!", "WELCOME")
        this.route.navigate(['/home'])},

      error=>{this.notifyService.showError("Enter details correctly"+error, "ERROR")}
    
    )
    }
}
