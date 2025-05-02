import { Component } from '@angular/core';
import { Registration } from '../models/registration';
import { RegistrationService } from '../services/registration.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports:[FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  r: Registration = new Registration();  // ✅ Ensure 'r' is properly initialized

  constructor(private rs: RegistrationService) {}

  submitdata() {
    this.rs.register(this.r).subscribe((data) => {
      if (data != null) {
        alert("Registration Successful");
      }
    });
  }
}
