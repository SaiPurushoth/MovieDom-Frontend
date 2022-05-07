import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CinemaDetailComponent } from './cinema-detail/cinema-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RecordComponent } from './record/record.component';
import { ProfileComponent } from './profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptorService } from './token-interceptor.service';

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
