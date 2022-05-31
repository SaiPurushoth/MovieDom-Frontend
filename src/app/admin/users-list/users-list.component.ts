import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  listusers:any=[]
  listadmin:any=[]
  constructor(private userservice:UserServiceService,private notifyservice:NotificationService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('role')=='admin'){
    this.userservice.listUser().subscribe(
      res=>{
      for(let item of res)
      {
      if(item.role=='guest')
      {
        this.listusers.push(item)
      }
      else{
        if(item.id!=localStorage.getItem('id'))
        {
   this.listadmin.push(item)
        }
      }
      }
      },       
        err=>{
        this.notifyservice.showError("Try Again", "ERROR")
        this.route.navigate(['/home'])
       })
  }
  else{
    this.notifyservice.showError("You are not a admin", "ERROR")
    this.route.navigate(['/home'])
  }
}

makeAdmin(id:any){
  if(localStorage.getItem('role')=='admin'){
    if(confirm("are you sure ?"))
    {
    this.userservice.changeAdmin(id).subscribe(
      res=>{this.notifyservice.showSuccess('change to admin done',"SUCCESS")
      this.route.navigate(['/home'])
      },
      err=>{
        this.notifyservice.showError("make admin error", "ERROR")
        this.route.navigate(['/home'])}
    )
      }
  }
  else{
    
    this.route.navigate(['/home'])
  }
}
removeAdmin(id:any){
  if(localStorage.getItem('role')=='admin'){
    if(confirm("are you sure ?"))
    {
    this.userservice.removeAdmin(id).subscribe(
      res=>{this.notifyservice.showSuccess('change to admin done',"SUCCESS")
      this.route.navigate(['/home'])
      },
      err=>{
        this.notifyservice.showError("make admin error", "ERROR")
        this.route.navigate(['/home'])}
    )
      }
  }
  else{
    
    this.route.navigate(['/home'])
  }
}
}
