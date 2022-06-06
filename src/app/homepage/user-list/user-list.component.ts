import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookLendReq } from 'src/app/models/booklendReq';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[] = [] ;

  constructor(private service: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadRequests() ;
  }

  loadRequests(){
    this.service.getAllUser().subscribe(
      response => {
        this.users = response ;
      }
    );
  }

  responseReq(reques: BookLendReq){
    //localStorage.setItem("tempPatient", JSON.stringify(patient)) ;
    //this.router.navigate(["doctor/patient-management/edit-patient-info"]) ;
  }

  // editResponse(request: any, n: any){
  //   if(n==1){
  //     request.is_accepted = 1 ;
  //     this.service.editRequest(request).subscribe(
  //       (reponse: any)=>{
  //         localStorage.setItem(request.book_id +'-'+ request.user_id, "Accepted");
  //       }
  //     ); 
  //   }
  //   else if(n==2){
  //     request.is_returned = 1 ;
  //     this.service.editRequest(request).subscribe(
  //       (reponse: any)=>{
  //         localStorage.removeItem(request.book_id +'-'+ request.user_id);
  //       }
  //     ); 
  //   }
  // }

}
