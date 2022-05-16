import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../home/home.component';
import { AddCinemaComponent } from './add-cinema/add-cinema.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditTheatersComponent } from './edit-theaters/edit-theaters.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { TheatersComponent } from './theaters/theaters.component';
import { UserReservationComponent } from './user-reservation/user-reservation.component';
import { UsersListComponent } from './users-list/users-list.component';




const routes: Routes = [
  {path:'addMovies',component:AddMoviesComponent,canActivate:[AuthGuard]},
  {path:'userDetails',component:UsersListComponent,canActivate:[AuthGuard]},
  {path:'addCinema',component:AddCinemaComponent,canActivate:[AuthGuard]},
  {path:'theaters',component:TheatersComponent,canActivate:[AuthGuard]},
  {path:'editTheaters',component:EditTheatersComponent,canActivate:[AuthGuard]},
  {path:'movies',component:MoviesListComponent,canActivate:[AuthGuard]},
  {path:'editMovie',component:EditMovieComponent,canActivate:[AuthGuard]},
  {path:'reservation',component:UserReservationComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AdminRoutingModule {




 }