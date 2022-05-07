import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  theaterId:any
  userId:any
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

   getUserId()
   {
     return this.userId
   }

   setTheaterId(theaterId:any)
   {
    this.theaterId=theaterId
   }

   setUserId(userId:any)
   {
     this.userId=userId
   }
  constructor(private http: HttpClient) { }


  book(seats:any){


    const url = "http://localhost:9000/reservations/book/"+this.theaterId+'/'+this.userId;
    const obj = { 
      date:this.dateformovie,
      seats:seats

    };
    return this.http.post(url, obj)
  }


  records(){
    const url = "http://localhost:9000/reservations/details/"+this.userId;
    return this.http.get(url)
  }

bookedseats(){
  const url = "http://localhost:9000/reservations/booked/"+this.theaterId;
  return this.http.get(url)
}

}
