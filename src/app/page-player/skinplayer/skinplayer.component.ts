import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";
import {PlayerService} from "../../_service/player/player.service";
import {PlayerInterface} from "../../_interface/player.interface";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-skinplayer',
  standalone: true,
  imports: [],
  templateUrl: './skinplayer.component.html',
  styleUrl: './skinplayer.component.css'
})
export class SkinplayerComponent implements OnInit {

  private playerService: PlayerService = inject(PlayerService);

  pseudoPlayer:string = "";
  player: PlayerInterface | any;

  playerSkin:string = "default-skin.png";

  constructor(private route:ActivatedRoute,
              protected app:AppComponent) {}

  ngOnInit() {
    this.pseudoPlayer = this.route.snapshot.params['pseudo']
    this.getPlayerOne();
  }

  getPlayerOne(){

    this.playerService.getPlayer(this.pseudoPlayer, this.app.setURL()).subscribe((reponsePlayer:ApiReponseInterface) => {
      this.player = reponsePlayer.data;

      if (this.player.skin.texture){

        if (this.player.skin.type == "png"){
          this.playerSkin = this.app.urlSkinHeberge + this.player.skin.texture;
        } else if (this.player.skin.type == "url"){
          this.playerSkin = this.player.skin.texture;
        }

      }


    });

  }

}
