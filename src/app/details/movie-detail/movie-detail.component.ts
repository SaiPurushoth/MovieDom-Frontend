import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieservice:MovieServiceService,private route:Router,private notifyservice:NotificationService) { }
  movieInformation:any
  ngOnInit(): void {
    this.movieInformation=this.movieservice.getMovieInfomation()
    if(this.movieInformation==undefined){
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
    }
  }

}
