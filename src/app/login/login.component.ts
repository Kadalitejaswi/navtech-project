import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginData ={
    email:"",
    password: ""
  };
  error ='';
  constructor(private _router:Router ) { }

  ngOnInit() {
  }
  
  loginUser(){
   
      if(this.loginData.email==="ashok@gmail.com" && this.loginData.password==="123456"){
        this._router.navigate(['/home']);
      
     
    }else{
    
      (alert ("Login Failed"))
      
    this._router.navigate(['/login']);  
    }
  }
  
}
