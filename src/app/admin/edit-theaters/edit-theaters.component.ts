import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaDetailComponent } from 'src/app/details/cinema-detail/cinema-detail.component';
import { CinemaServiceService } from 'src/app/services/cinema-service.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-theaters',
  templateUrl: './edit-theaters.component.html',
  styleUrls: ['./edit-theaters.component.css']
})
export class EditTheatersComponent implements OnInit {


  constructor(private cinemaservice:CinemaServiceService,private notifyservice:NotificationService,private route:Router,private movieservice:MovieServiceService) { }
list:any
item:any
moviename:any
theatername:any
cityname:any
ticket:any
noofrows:any
noofcolumns:any
imageurl:any
showtime:any
showdate:any

  ngOnInit(): void {
    

    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }

   this.movieservice.listMovie().subscribe(
     res=>{this.list=res
    },
      err=>{
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
     }
   )
   const id=this.cinemaservice.getTheaterId()
   if(id==undefined)
   {
    this.notifyservice.showError("Try Again", "ERROR")
    this.route.navigate(['/home'])
   }
   this.cinemaservice.getCinema(id).subscribe(
     res=>{this.item=res
      this.theatername=this.item.name
      this.cityname=this.item.city
      this.ticket=this.item.ticketPrice
      this.noofrows=this.item.rows
      this.noofcolumns=this.item.columns
      this.showtime=this.item.startAt
      this.showdate=new Date(this.item.date).toISOString().slice(0, 10)
      this.imageurl=this.item.image
      this.movieservice.getMovie(this.item.movieId).subscribe(
        res=>{this.moviename=res},         
        err=>{
          this.notifyservice.showError("Try Again", "ERROR")
          this.route.navigate(['/home'])
         }
      )
      
    }
   )
  }


  submit(name:any,city:any,ticketPrice:any,rows:any,columns:any,movie:any,startAt:any,date:any,image:any){
    if(localStorage.getItem('role')=='admin'){
      const givendate=new Date(date).toISOString().substring(0,10)
      const today=new Date().toISOString().substring(0,10)
      if(givendate>=today){
  this.cinemaservice.updateCinema(name,city,ticketPrice,rows,columns,movie,startAt,date,image).subscribe({
    next:(data)=>{
          this.notifyservice.showSuccess("edit Cinema done","SUCCESS")

    this.route.navigate(['/admin/theaters'])
  },


    error:(err)=>{
     this.notifyservice.showError("Enter Details Correctly", "ERROR")
    }
    })
  }
  else{
    this.notifyservice.showError("date Invalid", "ERROR")
  }
    }
else
{
  this.notifyservice.showError("you are not admin", "ERROR")
  this.route.navigate(['/home'])
}

 
 }

}  

