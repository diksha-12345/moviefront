import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router, RouterLink, RouterModule } from '@angular/router';  

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink], 
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  usertype = "guest";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(()=>{
      
      if (localStorage.getItem("email") !=null) {
        this.usertype = "user";
      } else if (localStorage.getItem("aemail") != null) {
        this.usertype = "admin";
      } else {
        this.usertype = "guest";
      }
      
    })
    
  }

  // ✅ Move logout functions outside ngOnInit()
  ulogout() {
    localStorage.removeItem("email");
    
    this.router.navigate(["/"]);
  }

  alogout() {
    localStorage.removeItem("aemail");
    
    this.router.navigate(["/"]);
  }
}
