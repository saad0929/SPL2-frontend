import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  constructor(public service: BookService, public router: Router, public snackBar: MatSnackBar) { }

  user : User | any ;

  ngOnInit(): void {
    this.user = localStorage.getItem("userInfo");
    this.user = JSON.parse(this.user);
  }

  addBook(): void{
    this.service.addBook().subscribe(
      (response: any)=>{
        // if(response==true){
          this.snackBar.open("Book Added", "",{duration: 2000});
          this.service.formModel.reset() ;
          this.router.navigate(["homepage/books"]) ;
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
