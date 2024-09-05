import { Component, inject, OnInit } from '@angular/core';
import { StatsService } from '../../_service/stats/stats.service';
import { StatsInterface } from '../../_interface/stats.interface';

@Component({
  selector: 'app-qui',
  standalone: true,
  imports: [],
templateUrl: './qui.component.html',
  styleUrl: './qui.component.css'
})
export class QuiComponent implements OnInit {

  public stats: StatsInterface | undefined;
  private statsService: StatsService = inject(StatsService);

  constructor() { }


  ngOnInit(): void {
    this.statsService.getStats().subscribe(stats => {
      this.stats = stats;
      console.log(this.stats);
    });
  }
}
