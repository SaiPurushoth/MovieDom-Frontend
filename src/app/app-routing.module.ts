import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './admin/add-movies/add-movies.component';
import { AuthGuard } from './auth.guard';
import { BookingDetailsComponent } from './details/booking-details/booking-details.component';
import { CinemaDetailComponent } from './details/cinema-detail/cinema-detail.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './details/movie-detail/movie-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RecordComponent } from './record/record.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MovieCollectionComponent } from './movie-collection/movie-collection.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {path:'registration',loadChildren:()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule)},
  {path:'details',loadChildren:()=>import('./details/details.module').then(mod=>mod.DetailsModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:'',component:FrontPageComponent},
  {path:'home',component:MovieCollectionComponent,canActivate:[AuthGuard]},
  {path:'shows',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'reservation',component:ReservationComponent,canActivate:[AuthGuard]},
  {path:'records',component:RecordComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
