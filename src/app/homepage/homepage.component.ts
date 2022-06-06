import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public router: Router) { }

  user : User | any ;
  catagoryOptionOpen = false ;
  isGuestUser = false ;
  isAdmin = false ;
  isUser = false ;

  ngOnInit(): void {
    this.user = localStorage.getItem("userInfo") ;
    if(localStorage.getItem("isLoggedIn")=="guestUser")
    {
      this.isGuestUser = true ;
    }
    else if(localStorage.getItem("isLoggedIn")=="user")
    {
      this.isUser = true ;
    }
    else if(localStorage.getItem("isLoggedIn")=="admin")
    {
      this.isAdmin = true ;
    }

    this.user = JSON.parse(this.user) ;
  }

  signOut(){
    localStorage.removeItem("isLoggedIn");

    this.router.navigate(["authentication/sign_in"]);
  }

  selectCatagory(catagory: String | any){
    localStorage.setItem("catagory", catagory);
    //this.router.navigate(["homepage/books"]);
    window.location.reload();

  }

  toogle(){
    if(this.catagoryOptionOpen==true){
      this.catagoryOptionOpen = false ;
    }
    else{
      this.catagoryOptionOpen = true ;
    }

    localStorage.setItem("catagory", "all");
  }

}
