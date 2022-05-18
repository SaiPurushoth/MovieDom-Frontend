import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../environmentVariables';

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
  const url = api.backend+'/movies/list'
  return this.http.get(url); 
}
getallMovies():Observable<any>{
  const url = api.backend+'/movies/'
  return this.http.get(url); 
}
 getMovie(id:any):Observable<any>{
  const url = api.backend+'/movies/details/'+id;
  return this.http.get(url); 
 }
 addMovie(title:any,language:any,genere:any,cast:any,director:any,description:any,duration:any,releaseDate:any,image:any):Observable<any>{

  const url = api.backend+'/movies/register'
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
  const url = api.backend+'/movies/update/'+this.movieId;
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
