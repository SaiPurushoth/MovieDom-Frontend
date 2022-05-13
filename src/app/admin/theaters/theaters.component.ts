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
    }  ,         err=>{
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
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

delete(id:any)
{
  if(localStorage.getItem('role')=='admin')
  {
  if(confirm("are you sure ?"))
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
  }
  else
{
  this.notifyservice.showError("you are not admin", "ERROR")
  this.route.navigate(['/home'])
}
}

}
