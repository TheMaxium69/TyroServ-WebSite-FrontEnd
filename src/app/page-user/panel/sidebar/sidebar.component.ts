import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(protected app: AppComponent){}
}
