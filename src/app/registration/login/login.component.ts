import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public jwtHelper:JwtHelperService = new JwtHelperService()
  constructor(private navservice:NavbarServiceService,private usrService:UserServiceService,private route:Router,private reservationservice:ReservationServiceService,private notifyService:NotificationService) { }
  show_eye:boolean=false
  username:any
  emailid:any
  userpassword:any
  userphone:any
  showpass(){
    if(this.show_eye==false)
    {
    this.show_eye=true}
    else
    {
      this.show_eye=false
    }
  }
  ngOnInit(): void {
  }

  login(email:string,password:string){
    this.usrService.loginUser(email,password).subscribe(

      res=>{
        const token=this.jwtHelper.decodeToken(res.token)
        console.log(token.id)
        console.log(token.role)
        localStorage.setItem('id',token.id)
        localStorage.setItem('role',token.role)
        localStorage.setItem('token',res.token)
        

        localStorage.setItem('refreshToken',res.refreshToken)
        this.navservice.log=true
        this.navservice.unlog=false
        this.notifyService.showSuccess("successfully logged-in !!", "WELCOME")
        this.route.navigate(['/home'])
    },
    error=>{
      console.log(error)
      this.notifyService.showError("Incorrect Details", "ERROR")}
   
    )
    
  }

}
