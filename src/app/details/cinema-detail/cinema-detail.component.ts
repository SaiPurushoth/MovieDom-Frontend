import { Component, OnInit } from '@angular/core';
import { CinemaServiceService } from '../../services/cinema-service.service';
import { HomeComponent } from '../../home/home.component';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cinema-detail',
  templateUrl: './cinema-detail.component.html',
  styleUrls: ['./cinema-detail.component.css']
})
export class CinemaDetailComponent implements OnInit {

  constructor(private cinemaservice:CinemaServiceService,private route:Router,private notifyservice:NotificationService) { }
  cinemaInformation:any
  ngOnInit(): void {
    this.cinemaInformation=this.cinemaservice.getCinemaInfomation()
    if(this.cinemaInformation==undefined){
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
    }
  }

}
