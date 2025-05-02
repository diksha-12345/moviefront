import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookmovieService } from '../services/bookmovie.service';
import { Bookmovie } from '../models/bookmovie';

@Component({
  selector: 'app-bookmovie',
  standalone: true,
  templateUrl: './bookmovie.component.html',
  styleUrls: ['./bookmovie.component.css'],
  imports: [FormsModule, CommonModule]
})
export class BookmovieComponent {
  b: Bookmovie = new Bookmovie();
  selectedSeats: string[] = [];

  // ✅ Define seats
  seatsArray = [
    { id: 'A1', label: '1', booked: true },
    { id: 'A2', label: '2', booked: false },
    { id: 'A3', label: '3', booked: true },
    { id: 'A4', label: '4', booked: false },
    { id: 'A5', label: '5', booked: false },
    { id: 'A6', label: '6', booked: false },
    { id: 'A7', label: '7', booked: false },
    { id: 'A8', label: '8', booked: false }
  ];

  constructor(private bs: BookmovieService) {}

  // ✅ Seat stats
  getTotalSeats(): number {
    return this.seatsArray.length;
  }

  getBookedSeatsCount(): number {
    return this.seatsArray.filter(seat => seat.booked).length;
  }

  getAvailableSeatsCount(): number {
    return this.seatsArray.filter(seat => !seat.booked).length;
  }

  // ✅ Toggle seat selection
  toggleSeat(seatLabel: string, event: any) {
    if (event.target.checked) {
      if (!this.selectedSeats.includes(seatLabel)) {
        this.selectedSeats.push(seatLabel);
      }
    } else {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seatLabel);
    }

    this.b.seats = this.selectedSeats.join(', ');
  }

  // ✅ Submit data
  submitData() {
    if (!this.b.name || !this.b.entermovie || !this.b.showdate || !this.b.time || this.selectedSeats.length === 0) {
      alert('Please fill all fields and select at least one seat.');
      return;
    }

    console.log("Submitting Data:", this.b);
    this.bs.bookmovie(this.b).subscribe(
      (data) => {
        console.log("Response:", data);
        alert("🎉 Movie booked successfully!");
      },
      (error) => {
        console.error("Error:", error);
        alert("❌ Booking failed. Please try again.");
      }
    );
  }
}
