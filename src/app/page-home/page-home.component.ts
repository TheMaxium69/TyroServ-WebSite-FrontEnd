import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {QuiComponent} from "./qui/qui.component";
import {CommentComponent} from "./comment/comment.component";
import {FactionComponent} from "./faction/faction.component";
import {LeaderComponent} from "./leader/leader.component";
import {SupportComponent} from "./support/support.component";
import {RejoinComponent} from "./rejoin/rejoin.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [
    HeaderComponent,
    QuiComponent,
    CommentComponent,
    FactionComponent,
    LeaderComponent,
    SupportComponent,
    RejoinComponent
  ],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {

}
