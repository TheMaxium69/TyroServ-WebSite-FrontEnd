import { Component } from '@angular/core';
import {RejoinComponent} from "../page-home/rejoin/rejoin.component";
import {HeaderComponent} from "../page-home/header/header.component";
import {SupportformComponent} from "./supportform/supportform.component";

@Component({
  selector: 'app-page-support',
  standalone: true,
  imports: [
    RejoinComponent,
    HeaderComponent,
    SupportformComponent
  ],
  templateUrl: './page-support.component.html',
  styleUrl: './page-support.component.css'
})
export class PageSupportComponent {

}
