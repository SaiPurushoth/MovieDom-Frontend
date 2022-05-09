import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaServiceService } from 'src/app/services/cinema-service.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-cinema',
  templateUrl: './add-cinema.component.html',
  styleUrls: ['./add-cinema.component.css']
})
export class AddCinemaComponent implements OnInit {

  constructor(private movieservice:MovieServiceService,private cinemaservice:CinemaServiceService,private route:Router,private notifyservice:NotificationService
    ) { }
  list:any
  ngOnInit(): void {
   this.movieservice.listMovie().subscribe(
     res=>{this.list=res}
   )
  }

  submit(name:any,city:any,ticketPrice:any,rows:any,columns:any,movie:any,startAt:any,date:any){
  this.cinemaservice.addCinema(name,city,ticketPrice,rows,columns,movie,startAt,date).subscribe(
    res=>{this.notifyservice.showSuccess("add Cinema done","SUCCESS")
    this.route.navigate(['\home'])},
    err=>{
      console.log(err)
     this.notifyservice.showError("Enter Details Correctly", "ERROR")
    }
  )
  }

}
