import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movieInfo:any
  constructor(private http: HttpClient) { }
  getMovieInfomation(){
    return this.movieInfo
  }
  setMovieInfoformation(movieInformation:any){
    this.movieInfo=movieInformation}

    
 getMovie(id:any):Observable<any>{
  const url = 'http://localhost:9000/movies/details/'+id;
  return this.http.get(url); 
 }
 addMovie(title:any,language:any,genere:any,cast:any,director:any,description:any,duration:any,releaseDate:any,image:any):Observable<any>{

  const url = 'http://localhost:9000/movies/register'
  let obj={
    title:title,
    language:language,
    genere:genere,
    cast:cast,
    director:director,
    description:description,
    duration:duration,
    releaseDate:releaseDate,
    image:image
  }
  return this.http.post(url,obj); 
 }

}
