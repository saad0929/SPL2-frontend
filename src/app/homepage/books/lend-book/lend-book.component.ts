import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookLendReq } from 'src/app/models/booklendReq';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-lend-book',
  templateUrl: './lend-book.component.html',
  styleUrls: ['./lend-book.component.css']
})
export class LendBookComponent implements OnInit {

  constructor(public service: BookService, public router: Router, public snackBar: MatSnackBar) {
    const currentYear = Date.now();
    this.minDate = new Date(currentYear);
    this.maxDate = new Date(currentYear + 1000*3600*24*200);
    this.minDate2 = new Date(currentYear);
    this.maxDate2 = new Date(currentYear + 1000*3600*24*365);
   }

  bookLendReq : BookLendReq | any ;
  user: User | any ;
  book: Book | any ;

  minDate: Date ;
  maxDate: Date ;

  minDate2: Date ;
  maxDate2: Date ;

  today = new Date();

  campaignOne = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date()),
  });


  ngOnInit(): void {
    this.user = localStorage.getItem("userInfo");
    this.user = JSON.parse(this.user);

    this.book = localStorage.getItem("tempBook");
    this.book = JSON.parse(this.book);
  }

  addBookLendReq(): void{
    this.service.sendLendReq(this.user.id, this.book.id, this.campaignOne.value.start, this.campaignOne.value.end, this.user.username, this.book.name).subscribe(
      (response: any)=>{
        // if(response==true){
          this.snackBar.open("Request Added", "",{duration: 2000});
          localStorage.setItem(this.book.id+'-'+this.user.id, "Added");
          this.service.formModel.reset() ;
          this.router.navigate(["homepage/view-book"]) ;
        // }
        // else if(response==false){
        //   this.snackBar.open("Book Name: " + this.service.formModel.value.bookName + " Already Exist", "",{duration: 2000});
        // }
        // else{
        //   this.snackBar.open("Something Wrong", "",{duration: 2000});
        // }
      }
    ) ;
  }

}
