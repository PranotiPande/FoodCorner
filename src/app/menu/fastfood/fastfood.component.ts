import { Component, OnInit } from '@angular/core';
import {FastfoodService} from '../../services/fastfood.service';
import {TotalbillService} from '../../services/totalbill.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.component.html',
  styleUrls: ['./fastfood.component.css']
})
export class FastfoodComponent implements OnInit {
fastfoodarr:any;
public flag=false;
  constructor(private fastfoodservice:FastfoodService,private TotalbillService:TotalbillService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fastfoodarr= this.fastfoodservice.getAllFastFood();
  }

  addToBill(food:any){
    this.flag=true;
    this.TotalbillService.insertFooddetails(food);
    this.snackBar.open(food.name+" "+"added successfully!!");
    
  }

}
