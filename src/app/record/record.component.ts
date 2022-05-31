import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ReservationServiceService } from '../services/reservation-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  list:any
  amt:any=0
  username:any
  constructor(private reservationservice:ReservationServiceService,private route:Router,private notifyservice:NotificationService,private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.userservice.getUser().subscribe(
      res=>{
         this.username=res
      },
      error=>{
        console.log(error)
        this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])}
    )
    this.reservationservice.records().subscribe(
      res=>{this.list=res
        for(let i of this.list)
        {
          this.amt=this.amt+i.total
        }
      },
      error=>{
        console.log(error)
        this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])}
    )
  }
delete(id:any){
  if(confirm("Are You Sure To Delete Reservation")){
  this.reservationservice.deleteReservation(id).subscribe(
    res=>{
      this.notifyservice.showSuccess("Reservation deleted","SUCCESS")
      this.route.navigate(['/home']) 
    },
    err=>{
      console.log(err)
      this.notifyservice.showError("Try Again", "ERROR")
    this.route.navigate(['/home'])
    }
  )
}
}
}
