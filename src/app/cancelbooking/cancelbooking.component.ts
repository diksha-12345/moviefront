import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cancelbooking } from '../models/cancelbooking';
import { CancelbookingService } from '../services/cancelbooking.service';

@Component({
  selector: 'app-cancelbooking',
  imports: [FormsModule, CommonModule],
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']  // Fix this line
})
export class CancelbookingComponent {
  c: Cancelbooking = new Cancelbooking();
  
  constructor(private cs: CancelbookingService) {}

  submitdata() {
    this.cs.cancelbooking(this.c).subscribe((data) => {
      if (data != null) {
        alert("Cancel booking successful");
      }
    });
  }
}
