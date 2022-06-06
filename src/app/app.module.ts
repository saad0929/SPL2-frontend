import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ProfileManagementComponent } from './homepage/profile-management/profile-management.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BooksComponent } from './homepage/books/books.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { AddBookComponent } from './homepage/add-book/add-book.component';
import { EditBookComponent } from './homepage/edit-book/edit-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewBookComponent } from './homepage/books/view-book/view-book.component';
import { LendBookComponent } from './homepage/books/lend-book/lend-book.component';
import { LendRequestListComponent } from './homepage/lend-request-list/lend-request-list.component';
import { UserListComponent } from './homepage/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    ProfileManagementComponent,
    HomepageComponent,
    BooksComponent,
    BottomBarComponent,
    AddBookComponent,
    EditBookComponent,
    ViewBookComponent,
    LendBookComponent,
    LendRequestListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
