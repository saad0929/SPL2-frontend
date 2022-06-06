import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Validation from '../utils/validation';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private formBuilder: FormBuilder, public http: HttpClient) { }

  formModel = this.formBuilder.group({
    username: ['', [Validators.required, Validators.maxLength(100)]],
    //dob: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    //email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(100), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    confirmPassword: ['', Validators.required ]
  },
  {
    validators: [Validation.match('password', 'confirmPassword'), Validation.dobCheck('dob')]
  });

  public url = "http://localhost:8000/api/" ;


  public signIn(){
    var body = {
      "username": this.formModel.value.username,
      "password": this.formModel.value.password,
    }

    return this.http.post<any>( this.url + "users/login", body);
  }

  public signUp(){
    var body = {
      "username": this.formModel.value.username,
      "password": this.formModel.value.password,
      "phone": this.formModel.value.phone,
      "email": this.formModel.value.email,
      "address": this.formModel.value.address,
    }

    return this.http.post<any>( this.url + "users", body);
  }

  public getAllUser(){
    return this.http.get<any>( this.url + "users");
  }
}
