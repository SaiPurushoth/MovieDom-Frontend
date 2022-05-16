import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.css']
})
export class UserReservationComponent implements OnInit {
  list:any
  constructor(private route:Router,private notifyservice:NotificationService,private reservationservice:ReservationServiceService) { }

  ngOnInit(): void {

    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }

   this.reservationservice.reserved().subscribe(
     res=>{this.list=res
    },         err=>{
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
     }  
   )

  }

}
