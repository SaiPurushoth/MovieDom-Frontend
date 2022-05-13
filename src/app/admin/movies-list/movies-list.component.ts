import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaServiceService } from 'src/app/services/cinema-service.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private movieservice:MovieServiceService,private cinemaservice:CinemaServiceService,private route:Router,private notifyservice:NotificationService) { }
   list:any
  ngOnInit(): void {

    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }

   this.movieservice.getallMovies().subscribe(
     res=>{this.list=res
    }  
   )

  }

  edit(id:any)
  {
    if(localStorage.getItem('role')=='admin')
    {
    this.movieservice.setMovieId(id)
    this.route.navigate(['/admin/editMovie'])
    }
    else
  {
    this.notifyservice.showError("you are not admin", "ERROR")
    this.route.navigate(['/home'])
  }
  }
  
  delete(id:any)
  {
    if(localStorage.getItem('role')=='admin')
    {
  this.cinemaservice.deleteCinema(id).subscribe({
  next:(data)=>{
    this.notifyservice.showSuccess('delete done',"SUCCESS")
    this.route.navigate(['/home'])},
  error:(err)=>{ 
    console.log(err)
     this.notifyservice.showError("delete cannot be done", "ERROR")
  this.route.navigate(['/home'])}
  })
    }
    else
  {
    this.notifyservice.showError("you are not admin", "ERROR")
    this.route.navigate(['/home'])
  }
  } 

}
