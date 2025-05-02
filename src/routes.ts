import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ViewmovieComponent } from './app/viewmovie/viewmovie.component';
import { RegisterComponent } from './app/register/register.component';
import { LoginComponent } from './app/login/login.component';

import { ViewbookinghistoryComponent } from './app/viewbookinghistory/viewbookinghistory.component';
import { CancelbookingComponent } from './app/cancelbooking/cancelbooking.component';

import { ManagemovieComponent } from './app/managemovie/managemovie.component';
import { Logout2Component } from './app/logout2/logout2.component';
import { BookmovieComponent } from './app/bookmovie/bookmovie.component';
import { AdminloginComponent } from './app/adminlogin/adminlogin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'viewmovie', component: ViewmovieComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {path:'bookmovie',component:BookmovieComponent},
  
    { path:'viewbookinghistory',component:ViewbookinghistoryComponent},
    {path: 'cancelbooking',component:CancelbookingComponent},
{path:'adminlogin',component:AdminloginComponent},
    {path: 'managmovie',component:ManagemovieComponent},
   
   
    {path: 'logout2',component:Logout2Component}
    

    
];
