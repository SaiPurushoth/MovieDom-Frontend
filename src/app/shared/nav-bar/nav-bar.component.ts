import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NavbarServiceService } from '../../services/navbar-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor(private navservice:UserServiceService) { }

  ngOnInit(): void {
  //   let navbar:any = document.getElementById('navbar')

  //  let sticky = navbar.offsetTop;
  //  window.onscroll=()=>{
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  //  }
  }


isInside()
{
  return this.navservice.loggedIn()
}
logout(){
  this.navservice.logoutUser()
}
}
