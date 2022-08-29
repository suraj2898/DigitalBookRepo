import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../Services/reader.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor( private readerApi:ReaderService) { 
    
  }
  books:any;
  ngOnInit(): void {    
    this.readerApi.GetBooks().subscribe(response => {
      this.books = response;
    });    
  }

  getValue():any
  {
    return localStorage.getItem("STATUS")?.toString();
  }
  purchasing:boolean=false;
  onSubmit(book:any): void {
    this.purchaseBookData.userid=localStorage.getItem("USERID")?.toString();
    this.purchaseBookData.bookid=book.bookid;
    this.purchasing=true;
    this.purchaseBookData.title=book.title;
    this.purchaseBookData.price=book.price;
  }
  purchaseBookData:any={
    email:"",
    userid:0,
    bookid:0,
    title:"",
    price:0
  }
  purchaseResp:any;
  OnPurahase():void
  {
    this.readerApi.Buy(this.purchaseBookData).subscribe(response => {
      this.purchaseResp = response;
      alert(this.purchaseResp.result);
      
    });   
  }
}
