import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-rejoin',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './rejoin.component.html',
  styleUrl: './rejoin.component.css'
})
export class RejoinComponent {

  constructor(protected app:AppComponent) {
  }

}
