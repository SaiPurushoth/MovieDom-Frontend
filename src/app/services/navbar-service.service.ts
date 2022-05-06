import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  unlog:boolean=true
  log:boolean=false
  constructor() { }

  isunLogged()
  {
    if(this.unlog==false)
    {

      return false
    }
    else
    {
      return true
    }
  }

  isLogged(){
    if(this.log==true)
    {

      return true
    }
    else
    {
      return false
    }
  }
  
}
