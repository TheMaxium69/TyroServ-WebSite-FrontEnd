import { Component } from '@angular/core';
import {SidebarComponent} from "./sidebar/sidebar.component";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {

}
