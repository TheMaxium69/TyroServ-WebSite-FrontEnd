import { Component, inject, OnInit } from '@angular/core';
import { StatsService } from '../../_service/stats/stats.service';
import {AppComponent} from "../../app.component";
import {StatsInterface} from "../../_interface/stats.interface";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-qui',
  standalone: true,
  imports: [
    RouterLink
  ],
templateUrl: './qui.component.html',
  styleUrl: './qui.component.css'
})
export class QuiComponent implements OnInit {

  public stats: StatsInterface | any;
  private statsService: StatsService = inject(StatsService);

  constructor(protected app: AppComponent) { }


  ngOnInit(): void {
    this.statsService.getStats(this.app.setURL()).subscribe((stats:ApiReponseInterface) => {
      this.stats = stats.data;
      // console.log(this.stats.playerUnique);
    });
  }
}
