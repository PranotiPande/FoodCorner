import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {
  private breakfastarr= [{id:1,name:"Idli",price:"100",path:"./assets/images/idli.jpg"},
  {id:2,name:"Dhokla",price:"70",path:"./assets/images/dhokla.jpg"},
  {id:3,name:"Uttpam",price:"60",path:"./assets/images/uttpam.jpg"},
  {id:4,name:"Poha",price:"50",path:"./assets/images/poha.jpg"},
  {id:5,name:"Dosa",price:"120",path:"./assets/images/dosa.jpg"},
  {id:6,name:"Poori Bhaji",price:"80",path:"./assets/images/poori.jpg"},
  {id:7,name:"Upma",price:"50",path:"./assets/images/upma.jpg"},
  {id:8,name:"Ghee Roast",price:"120",path:"./assets/images/gheerost.jpg"}];
  
  constructor() { }
  getAllBreakFastFood()
    {
        return this.breakfastarr;
    }
}
