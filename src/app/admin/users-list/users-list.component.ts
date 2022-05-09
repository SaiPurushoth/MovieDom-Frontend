import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  list:any
  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
    if(!!localStorage.getItem('admin')){
    this.userservice.listUser().subscribe(
      res=>{this.list=res},
      err=>{alert('not fetched properly')}
    )
  }
}

}
