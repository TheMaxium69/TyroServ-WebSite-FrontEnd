import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {

  constructor(protected app: AppComponent) { }

  PPUseritium:string = '';

  ngOnInit() {
    this.PPUseritium = this.app.generatePPUseritium(this.app.userConnected.useritium.pp, this.app.userConnected.useritium.username);
  }


  viewData(){

    console.log(this.app.userConnected);
    console.log(this.app.playerConnected);

  }

}
