import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../environmentVariables';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  theaterId:any
  bookingInfo:any
  listItem:any
  dateformovie:any
  rows:any
  columns:any
  price:any
  availableseats:any



  getRows(){
    return this.rows
  }
  getColumns(){
    return this.columns
  }
  setRows(row:any){
   this.rows=row
  }
  setColumn(column:any){
    this.columns=column
  }

  getPrice()
  {
return this.price
  }
  getAvailableSeats(){
return this.availableseats
  }

  setPrice(price:any){
    this.price=price
  }
  setAvailableseats(seats:any){
  this.availableseats=seats
  }


  getDateForMovie()
  {
    return this.dateformovie
  }



  setDateForMovie(dat:any)
  {
  this.dateformovie=dat
  }

  getBookingInfo()
  {
    return this.bookingInfo
  }
  setBookingInfo(bookinInfo:any){
    this.bookingInfo=bookinInfo
  }
   getTheaterId()
   {
     return this.theaterId
   }


   setTheaterId(theaterId:any)
   {
    this.theaterId=theaterId
   }


  constructor(private http: HttpClient) { }


  book(seats:any){


    const url = api.backend+"/reservations/book/"+this.theaterId+'/'+localStorage.getItem('id');
    const obj = { 
      date:this.dateformovie,
      seats:seats

    };
    return this.http.post(url, obj)
  }


  records(){
    const url = api.backend+"/reservations/details/"+localStorage.getItem('id')
    return this.http.get(url)
  }

bookedseats(){
  const url = api.backend+"/reservations/booked/"+this.theaterId+"/"+this.dateformovie;
  return this.http.get(url)
}

reserved(){
  const url = api.backend+"/reservations/list";
  return this.http.get(url)
}
deleteReservation(id:any){
  const url = api.backend+"/reservations/delete/"+id;
  return this.http.delete(url)
}
}
