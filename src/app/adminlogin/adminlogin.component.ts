import { Component } from '@angular/core';
import { Admin } from '../models/admin';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-adminlogin',
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

a: Admin = new Admin();

  constructor(private as: AdminService, private router: Router) {}

  submitdata() {
    this.as.login(this.a.email, this.a.password).subscribe((data)=>{
    if(data!=null)
    {
      alert("login successfully")
      localStorage.setItem("aemail",this.a.email)
      this.router.navigate(['/'])
    }
    else
    {
      alert("invalid email or password")
    }
    })
    }
  }