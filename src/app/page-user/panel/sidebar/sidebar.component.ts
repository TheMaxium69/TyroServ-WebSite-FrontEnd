import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(protected app: AppComponent){}
}
