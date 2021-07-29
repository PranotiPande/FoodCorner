import { Component, OnInit } from '@angular/core';
import{BreakfastService}from '../../services/breakfast.service';
import{TotalbillService} from '../../services/totalbill.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfastarr:any;
  constructor(private BreakfastService:BreakfastService,private TotalbillService:TotalbillService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.breakfastarr= this.BreakfastService.getAllBreakFastFood();
  }
  addToBill(food:any){
    this.TotalbillService.insertFooddetails(food);
    this.snackBar.open(food.name+" "+"added successfully!!");
  }




}
