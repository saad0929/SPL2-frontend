import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  isGuestUser = false ;
  isAdmin = false ;
  isUser = false ;

  constructor() { }

  ngOnInit(): void {
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

  }

}
