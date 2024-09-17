import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  constructor(protected app: AppComponent) {}

}
