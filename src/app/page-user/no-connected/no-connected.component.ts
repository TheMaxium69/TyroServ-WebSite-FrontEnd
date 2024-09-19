import {Component, Host, HostListener, OnInit} from '@angular/core';
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

  isMobile:boolean | undefined;

  chooseForm:string = "/panel/login";

  constructor(private router: Router,
              private app:AppComponent) {

  }

  ngOnInit(): void {
    this.chooseForm = this.router.url;
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const width = window.innerWidth;

    this.isMobile = width < 576;

  }

}
