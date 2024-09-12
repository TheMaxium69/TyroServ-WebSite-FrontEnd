import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { PlayerInterface } from '../../_interface/player.interface';
import { PlayerService } from '../../_service/player/player.service';



@Component({
  selector: 'app-infoplayer',
  standalone: true,
  imports: [],
  templateUrl: './infoplayer.component.html',
  styleUrl: './infoplayer.component.css'
})
export class InfoplayerComponent implements OnInit {

  private playerService: PlayerService = inject(PlayerService);
  pseudoPlayer:string = "";
  public player: PlayerInterface | undefined;


  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.pseudoPlayer = this.route.snapshot.params['pseudo']
    this.getPlayerOne();
  }

  getPlayerOne(){
    console.log(this.pseudoPlayer);
    this.playerService.getPlayer(this.pseudoPlayer).subscribe( (reponsePlayer) => {
      this.player = reponsePlayer;
      console.log(this.player);
    });
  }
  
}
