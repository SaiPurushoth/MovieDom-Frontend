import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RecordComponent } from './record/record.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path:'registration',loadChildren:()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule)},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'cinemaDetail',component:CinemaDetailComponent,canActivate:[AuthGuard]},
  {path:'movieDetail',component:MovieDetailComponent,canActivate:[AuthGuard]},
  {path:'reservation',component:ReservationComponent,canActivate:[AuthGuard]},
  {path:'booked',component:BookingDetailsComponent,canActivate:[AuthGuard]},
  {path:'records',component:RecordComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
