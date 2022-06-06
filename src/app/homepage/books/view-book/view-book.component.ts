import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  public catagory: string | any ;
  isUser = false ;
  isAdmin = false ;
  starRating : Array<number> | any;
  book : Book | any;
  ratingOptionOpen = false ;
  lendRequest = 0 ;
  lendReq : string | any ;
  user: User | any ;
  isRated = false ;

  constructor(private service: BookService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.book = localStorage.getItem("tempBook");
    this.book = JSON.parse(this.book);

    this.user = localStorage.getItem("userInfo");
    this.user = JSON.parse(this.user);
    
    if(localStorage.getItem("isLoggedIn")=="user")
    {
      this.isUser = true ;
      this.lendReq = localStorage.getItem(this.book.id+'-'+this.user.id);
      if(localStorage.getItem(this.book.id+'~'+this.user.id)=="rated"){
        this.isRated = true ;
      }
    }
    else if(localStorage.getItem("isLoggedIn")=="admin"){
      this.isAdmin = true ;
    }

    console.log(this.lendReq + "======fffffffffffffffffffff");
    if(this.lendReq=="Added") this.lendRequest = 1 ;
    else if(this.lendReq=="Accepted") this.lendRequest = 2 ;
    else if(this.lendReq=="Refused") this.lendRequest = 3 ;
  }

  public tempBook = new Book();

  deleteBook(){
    alert("Delete Book: " + this.book.name );

    this.service.removeBook(this.book.id).subscribe(
      (response: any)=>{
        if(response==true)
        {
          this.snackBar.open(this.book.name + " has been deleted successfully", "",{duration: 2000});
          this.router.navigate(["homepage/books"]) ;
        }
        else{
          this.snackBar.open("Something Wrong", "",{duration: 2000});
        }
      }
    );
  }

  editBookInfo(){
    localStorage.setItem("tempBook", JSON.stringify(this.book)) ;
    this.router.navigate(["homepage/edit-book"]) ;
  }

  submitRating(){
    if(this.book.rating==0){
      this.service.rateBook(this.book.id, this.starRating*2).subscribe(
        (response: any)=>{
          this.book.rating = (this.book.rating + this.starRating)  ;
          localStorage.setItem(this.book.id+'~'+this.user.id, "rated") ;
          this.isRated = true ;
          //window.location.reload();
        }
      ) ;
    }
    else{
      this.service.rateBook(this.book.id, this.starRating).subscribe(
        (response: any)=>{
          this.book.rating = (this.book.rating + this.starRating) / 2  ;
          localStorage.setItem(this.book.id+'~'+this.user.id, "rated") ;
          this.isRated = true ;
          //window.location.reload();
        }
      ) ;
    }
    
  }

  toogle(){
    if(this.ratingOptionOpen==true){
      this.ratingOptionOpen = false ;
    }
    else{
      this.ratingOptionOpen = true ;
    }
  }

  landRequestOperation(){
    localStorage.setItem("tempBook", JSON.stringify(this.book)) ;
    this.router.navigate(["homepage/lend-book"]) ;
  }
}
