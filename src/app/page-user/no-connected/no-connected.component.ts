import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {InscriptionformComponent} from "./inscriptionform/inscriptionform.component";

@Component({
  selector: 'app-no-connected',
  standalone: true,
  imports: [
    InscriptionformComponent
  ],
  templateUrl: './no-connected.component.html',
  styleUrl: './no-connected.component.css'
})
export class NoConnectedComponent {


}
