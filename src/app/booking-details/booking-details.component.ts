import { Component, OnInit } from '@angular/core';
import { ReservationServiceService } from '../services/reservation-service.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private reservationservice:ReservationServiceService) { }
  bookinfo:any
  ngOnInit(): void {

    this.bookinfo=this.reservationservice.getBookingInfo()
  }

}
