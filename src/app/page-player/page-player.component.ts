import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InfoplayerComponent} from "./infoplayer/infoplayer.component";
import {SkinplayerComponent} from "./skinplayer/skinplayer.component";
import {StatplayerComponent} from "./statplayer/statplayer.component";


@Component({
  selector: 'app-page-player',
  standalone: true,
  imports: [
    InfoplayerComponent,
    SkinplayerComponent,
    StatplayerComponent
  ],
  templateUrl: './page-player.component.html',
  styleUrl: './page-player.component.css'
})
export class PagePlayerComponent implements OnInit {

  pseudoPlayer:string = "";

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.pseudoPlayer = this.route.snapshot.params['pseudo']
  }
}

