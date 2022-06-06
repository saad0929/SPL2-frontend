import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public service: UserService, public router: Router, public snackBar: MatSnackBar) { }

  user: User | any;

  ngOnInit(): void {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn=="user"){
      this.router.navigate(["homepage/profile"]) ;
    }
  }

  ngOnDestroy(){
    this.service.formModel.reset() ;
  }

  signIn(){
    if(this.service.formModel.value.username == "admin" && this.service.formModel.value.password=="abcd1234A$"){
          localStorage.setItem('isLoggedIn', "admin") ;
                    
          this.service.formModel.reset() ;
          
          this.router.navigate(["homepage/books"]) ;
    }

    this.service.signIn().subscribe(
      (response: any)=>{
        this.user = response ;
        // console.log(this.user + "=============MMMMM=====" + this.user.id);
        
        if(this.user.id!=undefined){
          localStorage.setItem('userInfo', JSON.stringify(response)) ;
          localStorage.setItem('isLoggedIn', "user") ;
          localStorage.setItem('userId', response.id) ;
                    
          this.service.formModel.reset() ;
          
          this.router.navigate(["homepage/profile"]) ;
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
      },
      (error)=>{
        if(error.error=="Credentials not correct!"){
          this.snackBar.open("username && password doesnot match.", "",{duration: 2000});
        }
      }
    ) ;
  }



}
