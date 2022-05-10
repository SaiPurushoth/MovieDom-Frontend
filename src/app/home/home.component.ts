import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '../services/movie-service.service';
import { CinemaServiceService } from '../services/cinema-service.service';
import { ReservationServiceService } from '../services/reservation-service.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cinemas:any
  date:any=new Date().toISOString().substring(0,10)
  constructor(private cinemaservice:CinemaServiceService,private movieservice:MovieServiceService,private route:Router,private reservationservice:ReservationServiceService,private notifyService:NotificationService ) { }

  ngOnInit(): void {
      this.cinemaservice.listCinema().subscribe(
        res=>{this.cinemas=res
        }
        
      )
  }
search(city:string,dat:any)
{
this.date=dat
  city=city.toLowerCase()
 this.cinemaservice.searchCinema(city,dat).subscribe(
  res=>{this.cinemas=res},
  error=>{this.notifyService.showError("Try Again", "ERROR")
this.route.navigate(['/home'])}


 )
}

cinemaDetail(id:any){
  this.cinemaservice.getCinema(id).subscribe(
    res=>{this.cinemaservice.setCinemaInfoformation(res)
      this.route.navigate(['/details/cinemaDetail'])}
  )
}

movieDetail(id:any)
{
  console.log(id)
  this.movieservice.getMovie(id).subscribe(
    res=>{this.movieservice.setMovieInfoformation(res)
      this.route.navigate(['details/movieDetail'])
    }
  )
}

reserve(theaterId:any,seat:any,price:any,rows:any,columns:any)
{
  this.reservationservice.setRows(rows)
  this.reservationservice.setColumn(columns)
  this.reservationservice.setAvailableseats(seat)
  this.reservationservice.setPrice(price)
  this.reservationservice.setTheaterId(theaterId)
  this.reservationservice.setDateForMovie(this.date)
  this.route.navigate(['/reservation'])
}

}
