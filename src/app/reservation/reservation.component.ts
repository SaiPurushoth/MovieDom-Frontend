import { ThisReceiver } from '@angular/compiler';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { ReservationServiceService } from '../services/reservation-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private reservationservice:ReservationServiceService,private route:Router,private notifyService:NotificationService) { }
  price:any
  availableseats:any
   seats:any=[]

  rows:any=[]
  columns:any=[]
  status!:any
  booked:any

  ngOnInit(): void {
    this.availableseats=this.reservationservice.getAvailableSeats()
    this.price=this.reservationservice.getPrice()

  this.rows=this.reservationservice.getRows()
  this.columns=this.reservationservice.getColumns()
   this.status=new Array(this.rows)

console.log(this.rows,this.columns);
 
for(let j=0;j<this.rows.length;j++ )
{
  this.status[this.rows[j]]=new Array(this.columns.length)
  for(let i =0;i<this.columns.length;i++)
  {
   this.status[this.rows[j]][i]=false
}
}
console.log(this.status)
this.reservationservice.bookedseats().subscribe(
res=>{
  this.booked=res
  console.log(this.booked)
},
error=>{
  console.log(error)
}



)


  }

  book(){
    this.reservationservice.book(this.seats).subscribe(

      res=>{this.reservationservice.setBookingInfo(res)
        this.route.navigate(['/booked'])
      },
      error=>{this.notifyService.showError("Try to do it again", "ERROR"),
      console.log(error)
      this.route.navigate(['/home'])}
      
    )


  }



select(n1:any,n2:any,isselected:any)
{

let chair=n1+''+n2
let index=this.seats.indexOf(chair);

if(index==-1) 
{
this.status[n1][Number(n2)]=true

this.seats.push(chair)
console.log(this.seats)
}
else
{
  this.status[n1][Number(n2)]=false
  this.seats.splice(index, 1)
  console.log(this.seats)
}
}

}
