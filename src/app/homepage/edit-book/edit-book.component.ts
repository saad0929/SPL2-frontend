import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(public service: BookService, public snackBar: MatSnackBar, public router: Router) { }

  book: Book | any ;

  ngOnInit(): void {
    this.book = localStorage.getItem("tempBook");
    this.book = JSON.parse(this.book);
  }

  editBook(): void{
    this.service.editBooksInfo(this.book.id).subscribe(
      (response: any)=>{
        // if(response==true){
          this.snackBar.open("Book Edited", "",{duration: 2000});
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

  ngOnDestroy(){
    this.service.formModel.reset() ;
  }
}
