import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Add NavbarComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fix typo: styleUrl → styleUrls
})
export class AppComponent {
  title = 'ecom-front';
}
