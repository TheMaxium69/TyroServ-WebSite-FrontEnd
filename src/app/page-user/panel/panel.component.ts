import {Component, OnInit} from '@angular/core';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AppComponent} from "../../app.component";
import iziToast from 'izitoast';
import {Router} from "@angular/router";
import {InfoComponent} from "./info/info.component";
import {SkinComponent} from "./skin/skin.component";
import {CapeComponent} from "./cape/cape.component";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    SidebarComponent,
    InfoComponent,
    SkinComponent,
    CapeComponent
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit{

  chooseForm:string = "/panel";

  constructor(private router: Router,private app:AppComponent) {
  }

  ngOnInit() {

    this.app.verifToken();
    this.chooseForm = this.router.url;

    const connexionReussie = localStorage.getItem('connexionRéussie');

  if (connexionReussie === 'true') {
    iziToast.success({
      title: 'Bienvenue',
      position: 'bottomRight',
      message: 'Connexion réussie'
    });

    localStorage.removeItem('connexionRéussie');
  }

  }

}
