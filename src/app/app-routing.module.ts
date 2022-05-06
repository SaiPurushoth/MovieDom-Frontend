import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RecordComponent } from './record/record.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path:'registration',loadChildren:()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule)},
  {path:'home',component:HomeComponent},
  {path:'cinemaDetail',component:CinemaDetailComponent},
  {path:'movieDetail',component:MovieDetailComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'booked',component:BookingDetailsComponent},
  {path:'records',component:RecordComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
