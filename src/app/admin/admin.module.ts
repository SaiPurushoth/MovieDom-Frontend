import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { EditTheatersComponent } from './edit-theaters/edit-theaters.component';
import { TheatersComponent } from './theaters/theaters.component';



@NgModule({
  declarations: [
    EditTheatersComponent,
    TheatersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
