import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ReservationServiceService } from '../services/reservation-service.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  list:any
  constructor(private reservationservice:ReservationServiceService,private route:Router,private notifyservice:NotificationService) { }

  ngOnInit(): void {
    this.reservationservice.records().subscribe(
      res=>{this.list=res},
      error=>{
        console.log(error)
        this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])}
    )
  }

}
