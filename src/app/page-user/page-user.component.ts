import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {NoConnectedComponent} from "./no-connected/no-connected.component";

@Component({
  selector: 'app-page-user',
  standalone: true,
  imports: [
    NoConnectedComponent
  ],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent {

  constructor(protected app:AppComponent) {}

}
