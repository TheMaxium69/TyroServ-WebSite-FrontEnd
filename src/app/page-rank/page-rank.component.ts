import {Component, OnInit} from '@angular/core';
import {RejoinComponent} from "../page-home/rejoin/rejoin.component";
import {SupportComponent} from "../page-home/support/support.component";
import {FactionComponent} from "./faction/faction.component";
import {MinigameComponent} from "./minigame/minigame.component";
import {FaviconService} from "../_service/favicon/favicon.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-page-rank',
  standalone: true,
  imports: [
    RejoinComponent,
    SupportComponent,
    FactionComponent,
    MinigameComponent
  ],
  templateUrl: './page-rank.component.html',
  styleUrl: './page-rank.component.css'
})
export class PageRankComponent implements OnInit {

  constructor(private faviconService: FaviconService,
    private app:AppComponent) { }

  ngOnInit() {
    this.faviconService.setFavicon(this.app.faviconDefault);
    this.faviconService.setTitle('Classements - TyroServ')
  }

}
