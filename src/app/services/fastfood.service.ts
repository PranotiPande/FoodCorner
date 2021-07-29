import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FastfoodService {
  private fastfoodarr= [{id:1,name:"vadapav",price:"50",path:"./assets/images/img.jpeg"},
  {id:2,name:"Noodles",price:"150",path:"./assets/images/noodles.jpg"},
  {id:3,name:"Fried Rice",price:"200",path:"./assets/images/friedrice.jpg"},
  {id:4,name:"Chees Vadapav",price:"100",path:"./assets/images/img.jpeg"},
  {id:5,name:"Manchurian",price:"200",path:"./assets/images/manchurian.jpg"},
  {id:5,name:"Burger",price:"200",path:"./assets/images/burger.jpg"},
  {id:5,name:"PIZZA",price:"200",path:"./assets/images/pizza.jpg"},
  {id:5,name:"Capsicum Pizza",price:"200",path:"./assets/images/capssicum.jpg"}];
  



  constructor() {

  }

  getAllFastFood()
    {
        return this.fastfoodarr;
    }
}
