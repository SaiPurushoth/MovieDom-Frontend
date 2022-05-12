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
  ngOnInit(): void {
    

    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }

   this.movieservice.listMovie().subscribe(
     res=>{this.list=res}
   )
   const id=this.cinemaservice.getTheaterId()
   this.cinemaservice.getCinema(id).subscribe(
     res=>{this.item=res
      this.movieservice.getMovie(this.item.movieId).subscribe(
        res=>{this.moviename=res}
      )
      
    }
   )
  }


  submit(name:any,city:any,ticketPrice:any,rows:any,columns:any,movie:any,startAt:any,date:any,image:any){

    if(localStorage.getItem('role')=='admin'){

  this.cinemaservice.updateCinema(name,city,ticketPrice,rows,columns,movie,startAt,date,image).subscribe({
    next:(data)=>{
          this.notifyservice.showSuccess("add Cinema done","SUCCESS")

    this.route.navigate(['/home'])
  },


    error:(err)=>{
      console.log(err)
     this.notifyservice.showError("Enter Details Correctly", "ERROR")
    }
    })
    }
else
{
  this.notifyservice.showError("you are not admin", "ERROR")
  this.route.navigate(['/home'])
}

 
 }

}  

