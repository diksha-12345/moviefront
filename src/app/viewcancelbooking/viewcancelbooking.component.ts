import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- Import this
import { Cancelbooking } from '../models/cancelbooking';
import { CancelbookingService } from '../services/cancelbooking.service';

@Component({
  selector: 'app-viewcancelbooking',
  standalone: true,  // <-- Make sure to add this if you're using standalone
  imports: [CommonModule],  // <-- Add CommonModule here
  templateUrl: './viewcancelbooking.component.html',
  styleUrls: ['./viewcancelbooking.component.css']
})
export class ViewcancelbookingComponent implements OnInit {
  carr: Cancelbooking[] = [];

  constructor(private caserv: CancelbookingService) {}

  ngOnInit(): void {
    this.caserv.getAll().subscribe(data => {
      if (data.length > 0) {
        this.carr = data;
      }
    });
  }
}
