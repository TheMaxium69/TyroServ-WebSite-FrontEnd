import { Component, OnInit } from '@angular/core';
import { ApiReponseInterface } from '../../_interface/api-reponse.interface';
import { RankPlayerS1Interface } from '../../_interface/rank-interface/rank-player-s1.interface';
import { RankService } from '../../_service/rank/rank.service';
import { AppComponent } from '../../app.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

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
