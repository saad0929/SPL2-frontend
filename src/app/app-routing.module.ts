import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AddBookComponent } from './homepage/add-book/add-book.component';
import { BooksComponent } from './homepage/books/books.component';
import { LendBookComponent } from './homepage/books/lend-book/lend-book.component';
import { ViewBookComponent } from './homepage/books/view-book/view-book.component';
import { EditBookComponent } from './homepage/edit-book/edit-book.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LendRequestListComponent } from './homepage/lend-request-list/lend-request-list.component';
import { ProfileManagementComponent } from './homepage/profile-management/profile-management.component';
import { UserListComponent } from './homepage/user-list/user-list.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/sign_in', pathMatch: 'full'},
  { path: 'authentication', component: AuthenticationComponent,
    children:[
      { path: 'sign_in', component: SignInComponent },
      { path: 'sign_up', component: SignUpComponent }
    ]
  },
  {
    path: 'homepage', component: HomepageComponent, 
    children:[
      { path: 'profile', component: ProfileManagementComponent },
      { path: 'books', component: BooksComponent },
      { path: 'add-book', component: AddBookComponent },
      { path: 'edit-book', component: EditBookComponent },
      { path: 'view-book', component: ViewBookComponent },
      { path: 'lend-book', component: LendBookComponent },
      { path: 'lend-req-list', component: LendRequestListComponent},
      { path: 'user-list', component: UserListComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
