import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditTheatersComponent } from './edit-theaters/edit-theaters.component';
import { TheatersComponent } from './theaters/theaters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { UserReservationComponent } from './user-reservation/user-reservation.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    EditTheatersComponent,
    TheatersComponent,
    MoviesListComponent,
    EditMovieComponent,
    UserReservationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ]
})
export class AdminModule { }
