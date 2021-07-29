import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent}from './spa/home/home.component';
import{DesertComponent} from './menu/desert/desert.component';
import{BreakfastComponent} from './menu/breakfast/breakfast.component';
import{FastfoodComponent} from './menu/fastfood/fastfood.component';
import{LunchDinnerComponent} from './menu/lunch-dinner/lunch-dinner.component';
import { LoginComponent } from './admin/login/login.component';
import{TotalbillComponent} from './totalbill/totalbill.component';



const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'desert',component:DesertComponent},
{path:'breakfast',component:BreakfastComponent},
{path:'fastfood',component:FastfoodComponent},
{path:'lunch_dinner',component:LunchDinnerComponent},
{path:'admin',component:LoginComponent},
{path:'totalbill',component:TotalbillComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
