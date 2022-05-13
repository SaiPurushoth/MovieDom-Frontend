import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movieInfo:any
  movieId:any

  getMovieId()
  {
    return this.movieId;
  }
  setMovieId(id:any)
  {
    this.movieId=id
  }
  constructor(private http: HttpClient) { }
  getMovieInfomation(){
    return this.movieInfo
  }
  setMovieInfoformation(movieInformation:any){
    this.movieInfo=movieInformation}

    
listMovie():Observable<any>
{
  const url = 'http://localhost:9000/movies/list'
  return this.http.get(url); 
}
getallMovies():Observable<any>{
  const url = 'http://localhost:9000/movies/'
  return this.http.get(url); 
}
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
updateMovie(title:any,language:any,genere:any,cast:any,director:any,description:any,duration:any,releaseDate:any,image:any){
  const url = 'http://localhost:9000/movies/update/'+this.movieId;
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
  return this.http.patch(url,obj); 
}
}
