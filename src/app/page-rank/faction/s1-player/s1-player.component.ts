import {Component, OnInit} from '@angular/core';
import {RankService} from "../../../_service/rank/rank.service";
import {ApiReponseInterface} from "../../../_interface/api-reponse.interface";
import {AppComponent} from "../../../app.component";
import {RankPlayerS1Interface} from "../../../_interface/rank-interface/rank-player-s1.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-s1-player',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './s1-player.component.html',
  styleUrl: './s1-player.component.css'
})
export class S1PlayerComponent implements OnInit {

  leaderboard: RankPlayerS1Interface[]|undefined;

  constructor(private rankService: RankService,
              private app:AppComponent) { }

  ngOnInit() {

    this.rankService.getRankS1PlayerPreview(this.app.setURL()).subscribe((response: ApiReponseInterface) => {

      if (response.why == "Succes Request" && Array.isArray(response.data)) {
        this.leaderboard = response.data;
        console.log(this.leaderboard);
      }

    });



  }


}
