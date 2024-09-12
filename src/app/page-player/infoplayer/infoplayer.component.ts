import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { PlayerInterface } from '../../_interface/player.interface';
import { PlayerService } from '../../_service/player/player.service';
import {AppComponent} from "../../app.component";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";



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
  public player: PlayerInterface | any;


  constructor(private route:ActivatedRoute,
              private app:AppComponent) {}

  ngOnInit() {
    this.pseudoPlayer = this.route.snapshot.params['pseudo']
    this.getPlayerOne();
  }

  getPlayerOne(){
    console.log(this.pseudoPlayer);

    this.playerService.getPlayer(this.pseudoPlayer, this.app.setURL()).subscribe((reponsePlayer:ApiReponseInterface) => {
      this.player = reponsePlayer.data;
      console.log(this.player);
    });

  }

}
