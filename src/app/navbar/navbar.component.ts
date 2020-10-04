import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {

  constructor(  public router: Router  ) { }
  loginFlag : boolean = true;
  ngDoCheck(): void {
  //  this.router.navigate(['SignUp'])
    if (localStorage.getItem('loginFlag') != undefined){
        this.loginFlag = false;
    }
  }
  user : any;
  status : boolean = false;
  adminFlag : boolean = false;
  ngOnInit(): void {
  }

  login() { 
  //   this.loginServiceService.login();
  //   localStorage.setItem('LogedinUser',this.user);
  //   this.status = true;
  //  console.log("I am here !!!!!!!!!!!!!!!!!!" + this.status);
  }

  logout(){
   localStorage.removeItem('userName');
   localStorage.removeItem('Name');
   localStorage.removeItem('loginFlag');
   this.loginFlag = true;
  }

}
