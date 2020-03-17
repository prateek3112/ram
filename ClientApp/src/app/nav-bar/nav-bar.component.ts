import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
 
  constructor(private router:Router){

  }
  navbarOpen = false;
 
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  isAuthenticated() {
    return localStorage.getItem("token") != null;
}
logout() {
  localStorage.clear();
  this.router.navigate(['/']);
}

}