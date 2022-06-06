import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookLendReq } from 'src/app/models/booklendReq';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-lend-request-list',
  templateUrl: './lend-request-list.component.html',
  styleUrls: ['./lend-request-list.component.css']
})
export class LendRequestListComponent implements OnInit {

  public bookLendReqs: BookLendReq[] = [] ;

  constructor(private service: BookService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadRequests() ;
  }

  loadRequests(){
    this.service.getAllLendRequest().subscribe(
      response => {
        this.bookLendReqs = response ;
      }
    );
  }

  responseReq(reques: BookLendReq){
    //localStorage.setItem("tempPatient", JSON.stringify(patient)) ;
    //this.router.navigate(["doctor/patient-management/edit-patient-info"]) ;
  }

  editResponse(request: any, n: any){
    if(n==1){
      request.is_accepted = 1 ;
      this.service.editRequest(request).subscribe(
        (reponse: any)=>{
          localStorage.setItem(request.book_id +'-'+ request.user_id, "Accepted");
        }
      ); 
    }
    else if(n==2){
      request.is_returned = 1 ;
      this.service.editRequest(request).subscribe(
        (reponse: any)=>{
          localStorage.removeItem(request.book_id +'-'+ request.user_id);
        }
      ); 
    }
  }
}
