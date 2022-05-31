import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaServiceService } from 'src/app/services/cinema-service.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  list:any
  check:any
  cinema:any
  data:any=[]
  keyword = 'name';
  unique(value:any, index:any, self:any){
    return self.indexOf(value) === index
  }
  constructor(private cinemaservice:CinemaServiceService,private route:Router,private notifyservice:NotificationService,private movieservice:MovieServiceService) { }

  ngOnInit(): void {

    if(localStorage.getItem('role')!='admin')
    {
      this.notifyservice.showError("you are not admin", "ERROR")
      this.route.navigate(['/home'])
    }

   this.cinemaservice.allCinema().subscribe(
     res=>{this.list=res
      this.check=res
      let array=[]
      for(let item of res)
      {

        array.push(item.name)
      }

      this.data= array.filter(this.unique)
    }  ,         err=>{
      this.notifyservice.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])
     }
   )
  }
  selectEvent(item:any) {

    this.cinema=item
  }
 
  onChangeSearch(val: string) {
   this.cinema=""
  }
  
  onFocused(e:any){
  this.cinema=""
  }
search()
{
  if(this.cinema==undefined || this.cinema=="")
  {
    this.list=this.check
  }
  else{
 this.list=[]
  for(let item of this.check)
  {
   if(item.name==this.cinema)
   {
     this.list.push(item)
   }
    
  }
}
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
