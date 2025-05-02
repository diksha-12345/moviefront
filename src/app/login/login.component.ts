import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,  
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  r: Registration = new Registration();

  constructor(private rs: RegistrationService, private router: Router) {}

  submitdata() {
    this.rs.login(this.r.email, this.r.password).subscribe((data)=>{
    if(data!=null)
    {
      alert("login successfully")
      localStorage.setItem("email",this.r.email)
      this.router.navigate(['/'])
    }
    else
    {
      alert("invalid email or password")
    }
    })
    }
  }
