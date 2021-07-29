import { Component,Inject } from '@angular/core';
import {TotalbillService} from '../services/totalbill.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-totalbill',
  templateUrl: './totalbill.component.html',
  styleUrls: ['./totalbill.component.css']
})
export class TotalbillComponent {
totalbillarr:any;
 total:Number;
 name: string;

  constructor(private TotalbillService:TotalbillService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.totalbillarr=this.TotalbillService.getAllfoodDetails()
      var add;
    for( let i of this.totalbillarr){
   add+=Number(i.price);
    }
    this.total=add;
    //console.log("total="+this.total);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '450px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html'
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
   @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
 

  onNoClick(): void {
    this.dialogRef.close();
  }

}
