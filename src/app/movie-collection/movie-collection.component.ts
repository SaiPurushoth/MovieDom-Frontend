import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaServiceService } from '../services/cinema-service.service';
import { MovieServiceService } from '../services/movie-service.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.css']
})
export class MovieCollectionComponent implements OnInit {
  movies:any
  constructor(private movieservice:MovieServiceService,private route:Router,private cinemaservice:CinemaServiceService,private notifyservice:NotificationService) { }

  ngOnInit(): void {
     this.movieservice.getallMovies().subscribe(
       res=>{this.movies=res},
       error=>{this.notifyservice.showError("Try Again", "ERROR")
       this.route.navigate(['/'])}
       );
       
  }
  select(id:any){
    this.cinemaservice.setMovieId(id)
    this.route.navigate(['/shows'])
  }
  movieDetail(id:any)
  {
    this.movieservice.getMovie(id).subscribe(
      res=>{this.movieservice.setMovieInfoformation(res)
        this.route.navigate(['details/movieDetail'])
      },
      error=>{this.notifyservice.showError("Try Again", "ERROR")
       this.route.navigate(['/home'])}
    )
  }
}
