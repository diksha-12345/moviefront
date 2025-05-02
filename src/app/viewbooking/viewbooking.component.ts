import { Component, OnInit } from '@angular/core';
import { BookmovieService } from '../services/bookmovie.service';
import { Bookmovie } from '../models/bookmovie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewbooking',
  imports: [CommonModule],
  templateUrl: './viewbooking.component.html',
  styleUrl: './viewbooking.component.css'
})
export class ViewbookingComponent implements OnInit{
  barr:Bookmovie[]=[]
constructor(private baserv:BookmovieService)
{

}
  ngOnInit(): void {
   this.baserv.getAll().subscribe(data=>{
    if(data.length>0)
        this.barr=data
   })

}
}
