import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-skinplayer',
  standalone: true,
  imports: [],
  templateUrl: './skinplayer.component.html',
  styleUrl: './skinplayer.component.css'
})
export class SkinplayerComponent implements OnInit {

  pseudoPlayer:string = "";

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.pseudoPlayer = this.route.snapshot.params['pseudo']
  }

}
