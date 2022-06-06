import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {

  constructor() { }

  user : User | any ;

  ngOnInit(): void {
    this.user = localStorage.getItem("userInfo") ;
    this.user = JSON.parse(this.user) ;
    console.log(this.user) ;
  }



}
