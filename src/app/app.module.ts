import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Ensure you have a HomeComponent

const routes: Routes = [
  
  { path: 'home', component: HomeComponent }, // Home page
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' } // Redirect unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

  exports: [RouterModule]
})
export class AppRoutingModule { }
