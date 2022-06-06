import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from '../models/book';
import { BookLendReq } from '../models/booklendReq';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private formbuilder: FormBuilder, private http: HttpClient){}

  public url = "http://localhost:8000/api/" ;

  formModel = this.formbuilder.group({
    bookName: [],
    writterName: [],
    catagory : [],
    description: []
  });

  formModel2 = this.formbuilder.group({
    start_date: [],
    end_date: []
  });
  
  public addBook(){
    var body = {
      "name": this.formModel.value.bookName,
      "author": this.formModel.value.writterName,
      "category": this.formModel.value.catagory,
      "description": this.formModel.value.description
    }

    return this.http.post<any>(this.url + "books", body);
  }

  public getAllBooks(){
    return this.http.get<any>(this.url + "books") ;
  }

  public editBooksInfo(bookId: any){
    var body = {
      "id": bookId,
      "name": this.formModel.value.bookName,
      "author": this.formModel.value.writterName,
      "category": this.formModel.value.catagory,
      "description": this.formModel.value.description
    }

    return this.http.put<any>(this.url + "books", body);
  }

  public removeBook(book: Book){
    return this.http.put<any>(this.url + "delete/books", book);
  }

  public rateBook(bookId: number, rating: number ){
    var body = {
      "id": bookId,
      "rating": rating 
    }

    return this.http.post<any>(this.url + "books/rating", body);
  }

  public sendLendReq(userId: number, bookId: number, startDate: Date, endDate: Date, username: String, bookName: String){
    var body = {
      "user_id": userId,
      "book_id": bookId,
      "start_date": startDate,
      "end_date": endDate,
      "user_name": username,
      "book_name": bookName
    }

    return this.http.post<any>(this.url + "books/lend/requests", body);
  }

  public getAllLendRequest(){
    return this.http.get<any>(this.url + "books/lend/requests") ;
  }

  public editRequest(request: BookLendReq)
  {  
    return this.http.put<any>(this.url + "books/lend/requests", request) ;
  }

  public editRequest2(request: BookLendReq)
  {  
    return this.http.put<any>(this.url + "books/lend/requests", request) ;
  }
}
