import { Component, OnInit } from '@angular/core';
import { ReservationServiceService } from '../services/reservation-service.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  list:any
  constructor(private reservationservice:ReservationServiceService) { }

  ngOnInit(): void {
    this.reservationservice.records().subscribe(
      res=>{this.list=res}
    )
  }

}
