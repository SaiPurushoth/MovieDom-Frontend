import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddCinemaComponent } from './add-cinema/add-cinema.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { EditTheatersComponent } from './edit-theaters/edit-theaters.component';
import { TheatersComponent } from './theaters/theaters.component';
import { UsersListComponent } from './users-list/users-list.component';




const routes: Routes = [
  {path:'addMovies',component:AddMoviesComponent,canActivate:[AuthGuard]},
  {path:'userDetails',component:UsersListComponent,canActivate:[AuthGuard]},
  {path:'addCinema',component:AddCinemaComponent,canActivate:[AuthGuard]},
  {path:'theaters',component:TheatersComponent,canActivate:[AuthGuard]},
  {path:'editTheaters',component:EditTheatersComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AdminRoutingModule {




 }