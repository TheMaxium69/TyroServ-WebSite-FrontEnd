import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit{

  constructor(private app:AppComponent) {
  }

  ngOnInit() {

    this.app.verifToken();

  }

}
