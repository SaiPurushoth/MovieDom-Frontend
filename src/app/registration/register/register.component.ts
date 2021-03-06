import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import {GoogleLoginProvider, SocialAuthService, } from 'angularx-social-login';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name=""
  constructor(private usrService:UserServiceService,private route:Router,private navservice:NavbarServiceService,private reservationservice:ReservationServiceService,private notifyService:NotificationService,private authservice:SocialAuthService) { }
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

    signinwithgoogle(){
   this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID)
   this.authservice.authState.subscribe(
     res=>{console.log(res)}
   )
    }
}
