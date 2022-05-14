import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { ReservationServiceService } from '../../services/reservation-service.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private reservationservice:ReservationServiceService,private route:Router,private notifyservice:NotificationService) { }
  bookinfo:any
  ngOnInit(): void {
    this.bookinfo=this.reservationservice.getBookingInfo()

    if(this.bookinfo==undefined)
    {
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
    }
  }

}
