import { Component, OnInit } from '@angular/core';
import { TotalbillService } from 'src/app/services/totalbill.service';
import { TotalbillComponent } from 'src/app/totalbill/totalbill.component';
import {DesertService} from '../../services/desert.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {
 desertsarr:any;
 
  constructor(private desertservice:DesertService,private TotalbillService:TotalbillService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.desertsarr=this.desertservice.getAllDeserts();
  }
  addToBill(food:any){
    this.TotalbillService.insertFooddetails(food);
    this.snackBar.open(food.name+" "+"added successfully!!"/*,{duration:3000}*/);

  }
}
