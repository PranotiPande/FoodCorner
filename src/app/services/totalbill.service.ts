import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalbillService {
  private  foodarr=[{}]
  public total=0;
  constructor() { }

  insertFooddetails(ob:any){
    this.foodarr.push(ob);
  }
  
  getAllfoodDetails(){
    return this.foodarr;
}

}

