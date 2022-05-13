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
  list:any
  constructor(private userservice:UserServiceService,private notifyservice:NotificationService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('role')=='admin'){
    this.userservice.listUser().subscribe(
      res=>{this.list=res},
      err=>{
        console.log(err)
        alert('not fetched properly')}
    )
  }
  else{
    this.notifyservice.showError("You are not a admin", "ERROR")
    this.route.navigate(['/home'])
  }
}

makeAdmin(id:any){
  if(localStorage.getItem('role')=='admin'){
    this.userservice.changeAdmin(id).subscribe(
      res=>{this.notifyservice.showSuccess('change to admin done',"SUCCESS")
      this.route.navigate(['/home'])
      },
      err=>{
        console.log(err)
        this.notifyservice.showError("make admin error", "ERROR")
        this.route.navigate(['/home'])}
    )
  }
  else{
    
    this.route.navigate(['/home'])
  }
}

}
