import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { NavbarServiceService } from 'src/app/services/navbar-service.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  constructor(private movieservice:MovieServiceService,private route:Router,private notifyservice:NotificationService) { }

  ngOnInit(): void {
    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }
  }
  submit(title:any,language:any,genere:any,cast:any,director:any,description:any,duration:any,releaseDate:any,image:any)
  {
    if(localStorage.getItem('role')=='admin'){
     this.movieservice.addMovie(title,language,genere,cast,director,description,duration,releaseDate,image).subscribe(
       res=>{this.notifyservice.showSuccess("add movies done","SUCCESS")
         this.route.navigate(['\home'])},
         err=>{
           console.log(err)
          this.notifyservice.showError("Enter Details Correctly", "ERROR")
         }
         
     )
    }
    else{
      this.notifyservice.showError("You are not a admin", "ERROR")
      this.route.navigate(['/home'])
    }
  }

}
