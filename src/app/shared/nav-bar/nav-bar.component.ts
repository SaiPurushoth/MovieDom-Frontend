import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../../services/navbar-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor(private navservice:NavbarServiceService) { }

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

isRegister()
{
  return this.navservice.isunLogged()
}
isInside()
{
  return this.navservice.isLogged()
}

}
