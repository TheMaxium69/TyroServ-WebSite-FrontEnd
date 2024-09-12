import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {NoConnectedComponent} from "./no-connected/no-connected.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-user',
  standalone: true,
  imports: [
    NoConnectedComponent
  ],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent implements OnInit{

  constructor(protected app:AppComponent,
              protected route:Router,) {}

  ngOnInit(): void {
    if (!this.app.isLoggedIn && this.route.url !== "/panel/register") {
      this.route.navigate(['/panel/login']);
    }
  }


}
