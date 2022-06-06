import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[] = [] ;
  public books2: Book[] = [] ;
  public catagory: string | any ;
  isGuestUser = false ;
  isAdmin = false ;
  isUser = false ;
  starRating : Array<number> | any;

  constructor(private service: BookService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.catagory = localStorage.getItem("catagory");
    
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

    this.loadBooks() ;
  }

  public tempBook = new Book();

  loadBooks(){
    // for(var i=0; i<100 ; i++){
    //   this.tempBook.name = "BookName" + i;
    //   this.tempBook.category = "Catagory" + i ;
    //   this.tempBook.author = "Writter" + i ;

      

    //   if(this.catagory=="" || this.catagory==null || this.catagory=="all"){
    //      this.books.push(this.tempBook) ;
    //   }else if(this.tempBook.category==this.catagory){
    //     this.books.push(this.tempBook) ;
    //   }

    //   this.tempBook = new Book ;
    // }

    this.service.getAllBooks().subscribe(
      response => {
        this.books2 = response ;
        if(this.catagory=="all") this.books = response ;
        else {
          for(var i=0 ; i<this.books2.length ; i++){
            // console.log(res. + "========" + this.catagory)
            if(this.books2[i].category==this.catagory){
              this.books.push(this.books2[i]) ;
            }
          }
        }
      }
    );
  }
  deleteBook(book :Book){
    alert("Delete Book: " + book.name );

    this.service.removeBook(book).subscribe(
      (response: any)=>{
        this.loadBooks() ;
      }
    );
  }

  editBookInfo(book: Book){
    localStorage.setItem("tempBook", JSON.stringify(book)) ;
    this.router.navigate(["homepage/edit-book"]) ;
  }

  viewBook(book: Book){
    if(this.isGuestUser){
      return ;
    }
    localStorage.setItem("tempBook", JSON.stringify(book)) ;
    this.router.navigate(["homepage/view-book"]) ;
  }
}
