import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaServiceService {
  cinemaInfo:any
  constructor(private http: HttpClient) { }

  getCinemaInfomation(){
    return this.cinemaInfo
  }
  setCinemaInfoformation(cinemaInformation:any){
    this.cinemaInfo=cinemaInformation
  }

 listCinema():Observable<any>
 {
  const url = 'http://localhost:9000/cinemas/list';
  return this.http.get(url);
 }
 searchCinema(city:string,date:any):Observable<any>{
  const url = 'http://localhost:9000/cinemas/search/'+city+'/'+date;
  return this.http.get(url); 
 }
 getCinema(id:any):Observable<any>{
  const url = 'http://localhost:9000/cinemas/'+id;
  return this.http.get(url); 
 }
}
