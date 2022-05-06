import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieservice:MovieServiceService) { }
  movieInformation:any
  ngOnInit(): void {
    this.movieInformation=this.movieservice.getMovieInfomation()
  }

}
