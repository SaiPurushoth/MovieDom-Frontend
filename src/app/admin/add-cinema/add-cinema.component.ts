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
  cinema:any
  theatername:any
  cityname:any
  ticket:any
  noofrows:any
  noofcolumns:any
  imageurl:any
  unique(value:any, index:any, self:any){
    return self.indexOf(value) === index
  }
  ngOnInit(): void {
    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }



    this.cinemaservice.allCinema().subscribe(
      res=>{
          let array=[]
          for(let item of res)
          {

            array.push(item.name)
          }

          this.cinema = array.filter(this.unique)
      },
      error=>{this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])}
    )

   


   this.movieservice.listMovie().subscribe(
     res=>{this.list=res},
             err=>{
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
     }
   )
  }


result(value:any)
{
  console.log(value)
if(value=="")
{
  this.theatername=""
  this.cityname=""
  this.ticket=""
  this.noofrows=""
  this.noofcolumns=""
  this.imageurl=""
}
else
{
this.cinemaservice.allCinema().subscribe(
  
    res=>{
    for(let detail of res)
    {
      let title=detail.name
      if(title.toLowerCase()==value.toLowerCase())
      {
        this.theatername=detail.name
        this.cityname=detail.city
        this.ticket=detail.ticketPrice
        this.noofrows=detail.rows
        this.noofcolumns=detail.columns
        this.imageurl=detail.image
        break;
      }
    }
    
    }
  
)
  }

}



  submit(name:any,city:any,ticketPrice:any,rows:any,columns:any,movie:any,startAt:any,date:any,image:any){
    if(localStorage.getItem('role')=='admin'){
  this.cinemaservice.addCinema(name,city,ticketPrice,rows,columns,movie,startAt,date,image).subscribe(
    res=>{this.notifyservice.showSuccess("add Cinema done","SUCCESS")
    this.route.navigate(['/home'])},
    err=>{
     this.notifyservice.showError("Enter Details Correctly", "ERROR")
    }
  )
    }
else
{
  this.notifyservice.showError("you are not admin", "ERROR")
  this.route.navigate(['/home'])
}

  }

}
