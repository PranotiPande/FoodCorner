import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SPAModule } from './spa/spa.module';
import {MenuModule} from './menu/menu.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FastfoodService } from './services/fastfood.service';
import {MatInputModule} from '@angular/material/input';
import { BreakfastService } from './services/breakfast.service';
import { DesertService } from './services/desert.service';
import { TotalbillComponent,Dialog } from './totalbill/totalbill.component';
//import {Dialog} from './totalbill/totalbill.component'
import { TotalbillService } from './services/totalbill.service';


@NgModule({
  declarations: [
    AppComponent,
    TotalbillComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SPAModule,
    MenuModule,
    NgbModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [FastfoodService,
              BreakfastService,
              DesertService,
            TotalbillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
