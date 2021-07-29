import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesertComponent } from './desert/desert.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchDinnerComponent } from './lunch-dinner/lunch-dinner.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar'



@NgModule({
  declarations: [
    DesertComponent,
    FastfoodComponent,
    BreakfastComponent,
    LunchDinnerComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports:[
    DesertComponent,
    FastfoodComponent,
    BreakfastComponent,
    LunchDinnerComponent
  ]
})
export class MenuModule { }
