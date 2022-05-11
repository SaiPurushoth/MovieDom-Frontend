import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaServiceService } from 'src/app/services/cinema-service.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  list:any
  constructor(private cinemaservice:CinemaServiceService,private route:Router,private notifyservice:NotificationService) { }

  ngOnInit(): void {

    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }

   this.cinemaservice.allCinema().subscribe(
     res=>{this.list=res
    }  
   )


  }
edit(id:any)
{
  if(localStorage.getItem('role')=='admin')
  {
  this.cinemaservice.setTheaterId(id)
  this.route.navigate(['/admin/editTheaters'])
  }
  else
{
  this.notifyservice.showError("you are not admin", "ERROR")
  this.route.navigate(['/home'])
}
}
}
