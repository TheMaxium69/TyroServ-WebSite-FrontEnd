import { Component, OnInit } from '@angular/core';
import { ApiReponseInterface } from '../../_interface/api-reponse.interface';
import { RankPlayerS1Interface } from '../../_interface/rank-interface/rank-player-s1.interface';
import { RankService } from '../../_service/rank/rank.service';
import { AppComponent } from '../../app.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import iziToast from "izitoast";
import {PlayerInterface} from "../../_interface/player.interface";
import {PlayerService} from "../../_service/player/player.service";

@Component({
  selector: 'app-leader',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './leader.component.html',
  styleUrl: './leader.component.css'
})
export class LeaderComponent implements OnInit {
  leaderboard: RankPlayerS1Interface[]|undefined;

  constructor(private rankService: RankService,
              protected app:AppComponent,
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
