import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';





const routes: Routes = [

    {path:'cinemaDetail',component:CinemaDetailComponent,canActivate:[AuthGuard]},
    {path:'movieDetail',component:MovieDetailComponent,canActivate:[AuthGuard]},
    {path:'booked',component:BookingDetailsComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class DetailsRoutingModule { }