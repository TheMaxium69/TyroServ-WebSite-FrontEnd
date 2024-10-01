import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import { PlayerInterface } from '../../_interface/player.interface';
import { PlayerService } from '../../_service/player/player.service';
import {AppComponent} from "../../app.component";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";
import {CapeInterface} from "../../_interface/player-interface/cape.interface";
import {SkinplayerComponent} from "../skinplayer/skinplayer.component";
import {CapeService} from "../../_service/cape/cape.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-infoplayer',
  standalone: true,
  imports: [
    RouterLink,
    SkinplayerComponent,
    NgIf
  ],
  templateUrl: './infoplayer.component.html',
  styleUrl: './infoplayer.component.css'
})
export class InfoplayerComponent implements OnInit {
  @ViewChild('capeMcCanvas') capeMcCanvas: ElementRef | undefined;
  @ViewChild('capeOpCanvas') capeOpCanvas: ElementRef | undefined;

  private playerService: PlayerService = inject(PlayerService);

  pseudoPlayer:string = "";
  player: PlayerInterface | any;

  isMobile:boolean = false;

  dbCapeId:number|undefined;

  constructor(private route:ActivatedRoute,
              protected app:AppComponent,
              private capeService: CapeService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pseudoPlayer = params['pseudo'];
      this.dbCapeId = undefined;
      this.getPlayerOne();
      this.capeSelected();
    });
    this.getPlayerOne();
    this.capeSelected();

    this.isMobileScreen();
    window.addEventListener('resize', () => {
      this.isMobileScreen();
    });
  }

  getPlayerOne(){

    this.playerService.getPlayer(this.pseudoPlayer, this.app.setURL()).subscribe((reponsePlayer:ApiReponseInterface) => {
      this.player = reponsePlayer.data;
      // console.log(this.player);
    });

  }

  openPlayerProfile() {
    const url = `https://fr.namemc.com/profile/${this.player.player.pseudo}`;
    window.open(url, '_blank');
  }

  isMobileScreen() {
    this.isMobile = window.innerWidth < 1300;
  }

  capeSelected(){
    this.capeService.getCapeByPseudo(this.app.setURLUseritium(), this.pseudoPlayer).subscribe( (reponse:ApiReponseInterface) => {
      if (reponse.status == "true" && reponse.result){
        let idCapeSelected: { cape: string } = reponse.result as { cape: string };
        if (idCapeSelected.cape != null && idCapeSelected.cape != "null"){
          this.dbCapeId = Number(idCapeSelected.cape);
        }
      }
    });
  }

  startCapeOfficiel(){
    this.loadCapeMCOfficiel()
    return true;
  }

  loadCapeMCOfficiel() {
    setTimeout(() => {
      if (this.capeMcCanvas) {
        const canvas = this.capeMcCanvas.nativeElement;
        const context = canvas.getContext('2d');
        const imageUrl = canvas.getAttribute('data-url');

        const image = new Image();
        image.src = imageUrl.replace('https:', 'http:'); // Replace HTTPS with HTTP if needed

        image.onload = () => {
            context.imageSmoothingEnabled = false;

            const sourceX = 1;
            const sourceY = 1;
            const sourceWidth = 10;
            const sourceHeight = 16;
            const destX = 0;
            const destY = 0;
            const destWidth = canvas.width;
            const destHeight = canvas.height;

            context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

        };
      }
    }, 100);
  }

  startCapeOptifine(){
    this.loadCapeOptifine()
    return true;
  }

  loadCapeOptifine() {
    setTimeout(() => {
      if (this.capeOpCanvas) {
        const canvas = this.capeOpCanvas.nativeElement;
        const context = canvas.getContext('2d');
        const imageUrl = canvas.getAttribute('data-url');

        const image = new Image();
        image.src = imageUrl.replace('https:', 'http:'); // Replace HTTPS with HTTP if needed

        image.onload = () => {
            context.imageSmoothingEnabled = false;

            let sourceX = 1;
            let sourceY = 1;
            let sourceWidth = 10;
            let sourceHeight = 16;
            const destX = 0;
            const destY = 0;
            const destWidth = canvas.width;
            const destHeight = canvas.height;

            if (image.naturalWidth == 92 && image.naturalHeight == 44) {
              sourceX = sourceX*2;
              sourceY = sourceY*2;
              sourceWidth = sourceWidth*2;
              sourceHeight = sourceHeight*2;
            }

            context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

        };
      }
    }, 100);
  }


}
