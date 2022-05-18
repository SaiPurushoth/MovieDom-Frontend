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
  total:number=0  
  rows:any=[]
  columns:any=[]
  status!:any
  booked:any=[]
  
  cstatus:any=new Array()
   
  ngOnInit(): void {

    this.availableseats=this.reservationservice.getAvailableSeats()
    this.price=this.reservationservice.getPrice()

  this.rows=this.reservationservice.getRows()
  this.columns=this.reservationservice.getColumns()

    this.reservationservice.bookedseats().subscribe(
      res=>{
        this.booked=res
        for(let i of this.rows)
        {
         for(let j of this.columns)
         {
           let v = i+''+j
           let index=this.booked.indexOf(v);
           if(index==-1)
           {
           this.cstatus[v]=false;
           }
           else
           {
             this.cstatus[v]=true;
           }
         }
     
        }
        console.log(this.booked)
        console.log(this.cstatus)
      }    ,  error=>{this.notifyService.showError("Try Again", "ERROR")
      this.route.navigate(['/home'])}
      
      )  
      








   this.status=new Array(this.rows)
 
for(let j=0;j<this.rows.length;j++ )
{
  this.status[this.rows[j]]=new Array(this.columns.length)
  for(let i =0;i<this.columns.length;i++)
  {
   this.status[this.rows[j]][i]=false
}
}
}

  book(){
    if(confirm("confirm your total Amount:"+" "+"₹"+this.total))
    {
    this.reservationservice.book(this.seats).subscribe(

      res=>{this.reservationservice.setBookingInfo(res)
        this.notifyService.showSuccess("Your Seats are Booked","SUCCESS")
        this.route.navigate(['/details/booked'])
      },
      error=>{this.notifyService.showError("Try to do it again", "ERROR"),
      this.route.navigate(['/home'])}
      
    )
    }

  }



select(n1:any,n2:any,isselected:any)
{

let chair=n1+''+n2
let index1=this.seats.indexOf(chair);
let index2=this.booked.indexOf(chair);
if(index1==-1 && index2==-1) 
{
this.total=this.total+this.price;
this.status[n1][Number(n2)]=true

this.seats.push(chair)
}
else if(index2>-1)
{
  
}
else
{
  this.total=this.total-this.price
  this.status[n1][Number(n2)]=false
  this.seats.splice(index1, 1)
}
}

}
