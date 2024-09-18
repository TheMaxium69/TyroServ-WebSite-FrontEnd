import {Component, OnInit} from '@angular/core';
import {RankService} from "../../../_service/rank/rank.service";
import {ApiReponseInterface} from "../../../_interface/api-reponse.interface";
import {AppComponent} from "../../../app.component";
import {RankPlayerS1Interface} from "../../../_interface/rank-interface/rank-player-s1.interface";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {PlayerInterface} from "../../../_interface/player.interface";
import {PlayerService} from "../../../_service/player/player.service";

@Component({
  selector: 'app-s1-player',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './s1-player.component.html',
  styleUrl: './s1-player.component.css'
})
export class S1PlayerComponent implements OnInit {

  leaderboard: RankPlayerS1Interface[]|undefined;

  constructor(private rankService: RankService,
              private app:AppComponent,
              private playerService: PlayerService) { }

  ngOnInit() {

    this.rankService.getRankS1PlayerPreview(this.app.setURL()).subscribe((response: ApiReponseInterface) => {

      if (response.why == "Succes Request" && Array.isArray(response.data)) {
        this.leaderboard = response.data;

        this.leaderboard.forEach((playerLead: RankPlayerS1Interface) => {

          this.playerService.getPlayer(playerLead.pseudo, this.app.setURL()).subscribe((reponsePlayer: ApiReponseInterface) => {

            if (reponsePlayer.status == "true") {
              let choosePlayer: PlayerInterface = <PlayerInterface>reponsePlayer.data;
              if (choosePlayer) {

                const divElement = document.getElementById(playerLead.pseudo);
                if (divElement) {
                  const imgElement = divElement.querySelector('img');
                  if (imgElement) {
                    imgElement.src = this.app.generateSkinHead(choosePlayer.skin.type, choosePlayer.player.pseudo, choosePlayer.skin.texture);
                  }
                }
              }
            }
          });

        });
      }

    });



  }


}
