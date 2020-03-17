import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { LoginService } from "../login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  loginForm: FormGroup;
  constructor(private formbulider: FormBuilder,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  
  this.loginForm = this.formbulider.group({     
    Password: ['', [Validators.required]],    
    Email: ['', [Validators.required]]
  });  
  }

  onLogin(){

    this.loginService.onlogin(this.loginForm.value).subscribe((res)=>{
      console.log(res);
    },(error)=>{
      this.router.navigate(['/']);     
      if(error['status']==200){
        localStorage.setItem('token',error['error']['text']);
      }
      
    })
    
  }


}
