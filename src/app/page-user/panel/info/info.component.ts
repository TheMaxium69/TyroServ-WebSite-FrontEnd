import {Component} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent{

  constructor(protected app: AppComponent) { }



  viewData(){

    console.log(this.app.userConnected);
    console.log(this.app.playerConnected);

  }

}
