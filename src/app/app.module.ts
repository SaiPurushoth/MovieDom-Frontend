import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CinemaDetailComponent } from './details/cinema-detail/cinema-detail.component';
import { MovieDetailComponent } from './details/movie-detail/movie-detail.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BookingDetailsComponent } from './details/booking-details/booking-details.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RecordComponent } from './record/record.component';
import { ProfileComponent } from './profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptorService } from './token-interceptor.service';
import { AddMoviesComponent } from './admin/add-movies/add-movies.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { AddCinemaComponent } from './admin/add-cinema/add-cinema.component';
import { MovieCollectionComponent } from './movie-collection/movie-collection.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CinemaDetailComponent,
    MovieDetailComponent,
    ReservationComponent,
    BookingDetailsComponent,
    NavBarComponent,
    RecordComponent,
    ProfileComponent,
    AddMoviesComponent,
    UsersListComponent,
    AddCinemaComponent,
    MovieCollectionComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminRoutingModule,
    NgImageSliderModule,
    AutocompleteLibModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
