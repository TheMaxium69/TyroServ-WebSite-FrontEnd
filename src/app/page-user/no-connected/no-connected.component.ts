import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";
import {InscriptionformComponent} from "./inscriptionform/inscriptionform.component";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {ConnexionformComponent} from "./connexionform/connexionform.component";

@Component({
  selector: 'app-no-connected',
  standalone: true,
  imports: [
    InscriptionformComponent,
    RouterLink,
    ConnexionformComponent
  ],
  templateUrl: './no-connected.component.html',
  styleUrl: './no-connected.component.css'
})
export class NoConnectedComponent implements OnInit {

  chooseForm:string = "/panel/login";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.chooseForm = this.router.url;
  }


}
