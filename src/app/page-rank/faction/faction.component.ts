import { Component } from '@angular/core';
import {S1PlayerComponent} from "./s1-player/s1-player.component";
import {S1FactionComponent} from "./s1-faction/s1-faction.component";

@Component({
  selector: 'app-faction',
  standalone: true,
  imports: [
    S1PlayerComponent,
    S1FactionComponent
  ],
  templateUrl: './faction.component.html',
  styleUrl: './faction.component.css'
})
export class FactionComponent {

}
