import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {Router, RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'home', component: HomeComponent}])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
