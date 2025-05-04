import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ViewbookinghistoryComponent } from './viewbookinghistory/viewbookinghistory.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';

import { ManagemovieComponent } from './managemovie/managemovie.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { Logout2Component } from './logout2/logout2.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookmovieComponent } from './bookmovie/bookmovie.component';
import { ViewcancelbookingComponent } from './viewcancelbooking/viewcancelbooking.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },  
    { path: 'viewmovie', component: ViewmovieComponent }, 
    { path: 'register', component: RegisterComponent }, 
    { path: 'login', component: LoginComponent },
    
    
   
    { path: 'viewbookinghistory', component: ViewbookinghistoryComponent },
    {path:'bookmovie',component:BookmovieComponent},
   
    { path: 'cancelbooking', component: CancelbookingComponent },
    
    
{path:'adminlog',component:AdminloginComponent},
    { path: 'managemovie', component: ManagemovieComponent },  
    { path: 'viewbooking', component: ViewbookingComponent },
    { path: 'logout2', component: Logout2Component },
    
    {path:'viewcancelbooking',component:ViewcancelbookingComponent},

    // Redirect unknown routes
    { path: '**', redirectTo: '', pathMatch: 'full' }  
];
