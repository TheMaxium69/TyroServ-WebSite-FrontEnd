import { Component } from '@angular/core';
import {RejoinComponent} from "../page-home/rejoin/rejoin.component";
import {SupportComponent} from "../page-home/support/support.component";
import {FactionComponent} from "./faction/faction.component";
import {MinigameComponent} from "./minigame/minigame.component";

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
export class PageRankComponent {

}
