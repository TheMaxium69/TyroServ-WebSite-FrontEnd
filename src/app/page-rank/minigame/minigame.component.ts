import { Component } from '@angular/core';
import {S2PlayerComponent} from "./s2-player/s2-player.component";

@Component({
  selector: 'app-minigame',
  standalone: true,
  imports: [
    S2PlayerComponent
  ],
  templateUrl: './minigame.component.html',
  styleUrl: './minigame.component.css'
})
export class MinigameComponent {

}
