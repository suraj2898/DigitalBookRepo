import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  ngOnInit(): void {
  }
  constructor(private router: Router) { }
  title = 'DigitalBook';
  getValue():any
  {
    return localStorage.getItem("STATUS")?.toString();
  }
  getName():any
  {
    return localStorage.getItem("NAME")?.toString();
  }
  onLogout():void
  {
    localStorage.setItem("STATUS", "");
    this.router.navigate(['/Books']);    
  }
}
