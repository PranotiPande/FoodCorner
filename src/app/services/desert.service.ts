import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesertService {
  private desertarr= [{id:1,name:"ChoclateIce_cream",price:"200",path:"./assets/images/icecream.jpg"},
  {id:2,name:"Pestry",price:"70",path:"./assets/images/pastry1.jpg"},
  {id:3,name:"Cakes",price:"60",path:"./assets/images/cake.jpg"},
  {id:4,name:"Ras_Malai",price:"50",path:"./assets/images/rasmalai.jpg"},
  {id:5,name:"Gulab Jamun",price:"120",path:"./assets/images/gulabjamun.jpg"},
  {id:6,name:"Rice kheer",price:"80",path:"./assets/images/kheer.jpg"},
  {id:7,name:"Malpua",price:"50",path:"./assets/images/malpua.jpg"},
  {id:8,name:"Shrikhand",price:"120",path:"./assets/images/shrikhand.jpg"}];
  constructor() { }

  getAllDeserts()
  {
      return this.desertarr;
  }
}
