import { Component, OnInit } from '@angular/core';
import { ReaderService } from '../Services/reader.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private apiService:ReaderService) { }
  iconWidth:number=65;
  iconMargin:number=5;
  searchbook:any={
    price:"",
    category:"",
    publisher:""
  }
  resp:any={};
  ngOnInit(): void {
  }
  onSubmit(): void {
    if(this.searchbook.price=="" && this.searchbook.category=="" && this.searchbook.publisher=="")
    {
      alert("At least one field required.")
      return;
    }
    if(this.searchbook.price=="")
    {
      this.searchbook.price=0;
    }
    this.apiService.searchBook(this.searchbook).subscribe(response=>{
      this.resp= response;
      if(this.resp.length==0)
      {
        alert("Books Not Found");
      }
    });    
  }
}
