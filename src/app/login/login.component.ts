import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


import { LoginData } from './login.modal';

import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { observable } from 'rxjs/internal/symbol/observable';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private route : Router,private service : ServiceService ) { }

  
   flag: boolean = false;
   responsemessage: string;
   loginForm: FormGroup;
   logindata: LoginData;
   errormsg : any;
   errorFlag : boolean;
   ngOnInit() {
    if (localStorage.getItem('loginFlag') == undefined){
      this.errorFlag = true;
     this.errormsg = "Only Logged In User, Can Attempt Quiz";

  }

    this.loginForm = this.formBuilder.group({
      inputEmail: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30),
      Validators.email]),

      inputPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)])
    });

   }

   onSubmit() {
    this.logindata = new LoginData();
    if (this.loginForm.getRawValue().inputEmail === '') {
      this.logindata.setEmailAddress(null);
    }
    else {
      this.logindata.setEmailAddress(this.loginForm.getRawValue().inputEmail);
    }

    if (this.loginForm.getRawValue().inputPassword === '') {
      this.logindata.setPassword(null);
    }
    else {
      this.logindata.setPassword(this.loginForm.getRawValue().inputPassword);
    }

    this.service.postLoginDetail(this.logindata).subscribe(data => {
      this.flag = true;
      if (data['response'] == "Valid User") {
        this.responsemessage = "Login Successfull";
        this.errorFlag = false;
        localStorage.setItem('Name',data['Name']);
        localStorage.setItem('loginFlag','true');
          localStorage.setItem('userName', this.loginForm.getRawValue().inputEmail);
        //  localStorage.setItem('password', this.loginForm.getRawValue().inputPassword);
        setTimeout(()=>{
         this.route.navigate(['quiz']);
        }, 2000);
        this.loginForm.reset();
      }
      else {
        this.responsemessage = "Login Unsuccessfull,incorrect username or password ";
        console.log("I am in else condition" + data['response']);
      }
      setTimeout( () => { this.route.navigate(['productDetail'])}, 3000 );
    //  this.route.navigate(['productDetail']);
    });
  
   }

   toSignUp(){
    this.route.navigate(['SignUp']);
   }

}
