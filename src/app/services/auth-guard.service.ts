import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }

  canActivate(){
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if(isLoggedIn=="true"){
      return true ;
    }else{
      this.router.navigate(["authentication/sign_in"]);
    }

    return false ;
  }
}
