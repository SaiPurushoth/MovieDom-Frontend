import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService {
  cinemaInfo:any
  movieId:any
  theaterId:any
  constructor(private http: HttpClient) { }

  getTheaterId()
  {
  return this.theaterId
  }
  setTheaterId(id:any){
   this.theaterId=id
  }
  getMovieid()
  {
  return this.movieId;
  }
  setMovieId(id:any){
  this.movieId=id
  }
  getCinemaInfomation(){
    return this.cinemaInfo
  }
  setCinemaInfoformation(cinemaInformation:any){
    this.cinemaInfo=cinemaInformation
  }

  allCinema():Observable<any>
  {
    const url = 'http://localhost:9000/cinemas/all';
    return this.http.get(url); 
  }
 listCinema():Observable<any>
 {

  const url = 'http://localhost:9000/cinemas/list/'+this.movieId;
  return this.http.get(url);
   
 }
 searchCinema(city:string,date:any):Observable<any>{
  const url = 'http://localhost:9000/cinemas/search/'+this.movieId+'/'+city+'/'+date;
  return this.http.get(url); 
 }
 getCinema(id:any):Observable<any>{
  const url = 'http://localhost:9000/cinemas/'+id;
  return this.http.get(url); 
 }

addCinema(name:any,city:any,ticketPrice:any,rows:any,columns:any,movie:any,startAt:any,date:any,image:any):Observable<any>{
  const url = 'http://localhost:9000/cinemas/register'
  var obj={
    name:name,
    city:city,
    ticketPrice:ticketPrice,
    rows:rows,
    columns:columns,
    movie:movie,
    startAt:startAt,
    date:date,
    image:image
  }
  return this.http.post(url,obj); 
}
updateCinema(name:any,city:any,ticketPrice:any,rows:any,columns:any,movie:any,startAt:any,date:any,image:any):Observable<any>{
  const url = 'http://localhost:9000/cinemas/update/'+this.theaterId
  var obj={
    name:name,
    city:city,
    ticketPrice:ticketPrice,
    rows:rows,
    columns:columns,
    movie:movie,
    startAt:startAt,
    date:date,
    image:image
  }

  return this.http.patch(url,obj); 
}
deleteCinema(id:any)
{
  const url = 'http://localhost:9000/cinemas/delete/'+id;
  return this.http.get(url); 
}
}
