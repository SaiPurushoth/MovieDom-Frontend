import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { UsersListComponent } from './users-list/users-list.component';




const routes: Routes = [
  {path:'addMovies',component:AddMoviesComponent,canActivate:[AuthGuard]},
  {path:'userDetails',component:UsersListComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AdminRoutingModule {




 }