import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  config="https://localhost:44380/";

  constructor(private http:HttpClient,private router:Router) { }

  onlogin(data){
     return this.http.post("https://localhost:44380/"+ "api/token",data);
  }

  isAuthenticated() {
    return localStorage.getItem("token") != null;
}

logout() {
    localStorage.clear();
    this.router.navigate(['/']);
}
}
