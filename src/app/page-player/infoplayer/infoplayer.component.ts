import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-infoplayer',
  standalone: true,
  imports: [],
  templateUrl: './infoplayer.component.html',
  styleUrl: './infoplayer.component.css'
})
export class InfoplayerComponent implements OnInit {

  pseudoPlayer:string = "";

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.pseudoPlayer = this.route.snapshot.params['pseudo']
  }

}
