import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private navservice:NavbarServiceService,private usrService:UserServiceService,private route:Router,private reservationservice:ReservationServiceService,private notifyService:NotificationService) { }

  ngOnInit(): void {
  }

  login(email:string,password:string){
    this.usrService.loginUser(email,password).subscribe(
      res=>{ localStorage.setItem('id',res.id)

        localStorage.setItem('role',res.role)
        localStorage.setItem('token',res.token)
        localStorage.setItem('refreshToken',res.refreshToken)
        this.navservice.log=true
        this.navservice.unlog=false
        this.notifyService.showSuccess("successfully logged-in !!", "WELCOME")
        this.route.navigate(['/home'])
    },
    error=>{this.notifyService.showError("Incorrect Details", "ERROR")}
   
    )
    
  }

}
