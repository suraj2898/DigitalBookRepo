import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PurchasebookComponent } from './purchasebook/purchasebook.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Login",component:LoginComponent},
  {path:"",component:BooksComponent},
  {path:"Books",component:BooksComponent},
  {path:"Search",component:SearchbookComponent},
  {path:"AddBook",component:AddbookComponent},
  {path:"UpdateBook",component:UpdatebookComponent},
  {path:"Bought",component:PurchasebookComponent},
  {path:"Signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
