import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InfoplayerComponent} from "./infoplayer/infoplayer.component";
import {SkinplayerComponent} from "./skinplayer/skinplayer.component";
import {StatplayerComponent} from "./statplayer/statplayer.component";
import {ApiReponseInterface} from "../_interface/api-reponse.interface";
import {PlayerService} from "../_service/player/player.service";
import {AppComponent} from "../app.component";
import {FaviconService} from "../_service/favicon/favicon.service";
import {PlayerInterface} from "../_interface/player.interface";


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

  private playerService: PlayerService = inject(PlayerService);

  pseudoPlayer:string = "";
  existingPlayer:boolean = true;

  isMobile:boolean = false;


  constructor(private route:ActivatedRoute,
              private app:AppComponent,
              private faviconService:FaviconService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pseudoPlayer = params['pseudo'];
      this.getPlayerOne();
    });
    this.getPlayerOne();

    this.isMobileScreen();
    window.addEventListener('resize', () => {
      this.isMobileScreen();
    });

  }

  getPlayerOne(){

    this.playerService.getPlayer(this.pseudoPlayer, this.app.setURL()).subscribe((reponsePlayer:ApiReponseInterface) => {

      if (reponsePlayer.status == "true"){
        this.existingPlayer = true;
        let getPlayer:PlayerInterface = reponsePlayer.data as PlayerInterface;;
        this.faviconService.setFavicon(this.app.generateSkinHead(getPlayer?.skin?.type, getPlayer?.player?.pseudo, getPlayer?.skin?.texture));
        this.faviconService.setTitle(getPlayer?.player?.pseudo + " - TyroServ")
      } else {
        this.existingPlayer = false;
      }

    });

  }

  isMobileScreen() {
    this.isMobile = window.innerWidth < 1300;
  }
}

