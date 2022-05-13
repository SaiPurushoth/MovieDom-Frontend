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
  city:any=""
  data:any=[]
  keyword = 'name';

  date:any=new Date().toISOString().substring(0,10)
  constructor(private cinemaservice:CinemaServiceService,private movieservice:MovieServiceService,private route:Router,private reservationservice:ReservationServiceService,private notifyService:NotificationService ) { }
  unique(value:any, index:any, self:any){
    return self.indexOf(value) === index
  }
  ngOnInit(): void {
      this.cinemaservice.listCinema().subscribe(
        res=>{this.cinemas=res
        }  ,
        error=>{this.notifyService.showError("Try Again", "ERROR")
        this.route.navigate(['/home'])}
      )

      this.cinemaservice.allCinema().subscribe(
        res=>{
            let list=[]
            for(let item of res)
            {
 
              list.push(item.city)
            }

            this.data = list.filter(this.unique)
        },
        error=>{this.notifyService.showError("Try Again", "ERROR")
        this.route.navigate(['/home'])}
      )

  }

 


 
  selectEvent(item:any) {

    this.city=item
  }
 
  onChangeSearch(val: string) {
 
  }
  
  onFocused(e:any){
  
  }


search(dat:any)
{
this.date=dat
  this.city=this.city.toLowerCase()
  console.log(this.city)
 this.cinemaservice.searchCinema(this.city,dat).subscribe(
  res=>{this.cinemas=res},
  error=>{this.notifyService.showError("Try Again", "ERROR")
this.route.navigate(['/home'])}


 )
}






cinemaDetail(id:any){
  this.cinemaservice.getCinema(id).subscribe(
    res=>{this.cinemaservice.setCinemaInfoformation(res)
      this.route.navigate(['/details/cinemaDetail'])},  
      error=>{this.notifyService.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])}
  )
}

movieDetail(id:any)
{
  console.log(id)
  this.movieservice.getMovie(id).subscribe(
    res=>{this.movieservice.setMovieInfoformation(res)
      this.route.navigate(['details/movieDetail'])
    },
    error=>{this.notifyService.showError("Try Again", "ERROR")
    this.route.navigate(['/home'])}
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
