import { Component, OnInit } from '@angular/core';
import { CinemaServiceService } from '../../services/cinema-service.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-cinema-detail',
  templateUrl: './cinema-detail.component.html',
  styleUrls: ['./cinema-detail.component.css']
})
export class CinemaDetailComponent implements OnInit {

  constructor(private cinemaservice:CinemaServiceService) { }
  cinemaInformation:any
  ngOnInit(): void {
    this.cinemaInformation=this.cinemaservice.getCinemaInfomation()
  }

}
