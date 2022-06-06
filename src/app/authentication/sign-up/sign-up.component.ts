import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  minDate: Date;
  maxDate: Date;

  constructor(public service: UserService, public snackBar: MatSnackBar, public router: Router) {
    const currentYear = Date.now();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear);
  }

  submitted = false ;
  

  ngOnInit(): void {
  }

  signUp(){
    this.submitted = true ;

    if(this.service.formModel.invalid){
      return ;
    }
    // else{
    //   this.service.formModel.reset() ;
    //   this.router.navigate(["homepage/profile"]) ;
    //   return ;
    // }

    this.service.signUp().subscribe(
      (response: any) => {
        if(response != null){
          localStorage.setItem('userInfo', JSON.stringify(response)) ;
          localStorage.setItem('isLoggedIn', "user") ;
          localStorage.setItem('userId', response.id) ;
                    
          this.service.formModel.reset() ;
          
          this.router.navigate(["homepage/profile"]) ;
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
      }
    );
  }

  get f(): {[key: string]: AbstractControl}{
    return this.service.formModel.controls ;
  }
}
