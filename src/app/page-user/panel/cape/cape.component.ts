import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import {CapeService} from "../../../_service/cape/cape.service";
import {ApiReponseInterface} from "../../../_interface/api-reponse.interface";
import {CapeWikiInterface} from "../../../_interface/cape-wiki.interface";
import {CapeInterface} from "../../../_interface/player-interface/cape.interface";

@Component({
  selector: 'app-cape',
  standalone: true,
  imports: [],
  templateUrl: './cape.component.html',
  styleUrl: './cape.component.css'
})
export class CapeComponent implements OnInit {

  currentCapeId: number = 99999999;
  recommendCape: CapeWikiInterface[] = [];

  constructor(protected app:AppComponent,
              private capeService:CapeService){}

  ngOnInit() {

    /* GET CAPE SELECTED */
    this.capeService.getCapeByPseudo(this.app.setURLUseritium(), this.app.playerConnected.player.pseudo).subscribe( (reponse:ApiReponseInterface) => {
      if (reponse.status == "true" && reponse.result){
        let idCapeSelected: { cape: string } = reponse.result as { cape: string };
        if (idCapeSelected.cape != null && idCapeSelected.cape != "null"){
          this.currentCapeId = Number(idCapeSelected.cape);
        }
      }
    });

    /* GET CAPE RECOMMANDED */
    this.capeService.getAllCape(this.app.setURL()).subscribe( (AllCape:CapeWikiInterface[]) => {

      AllCape.forEach((oneCapeGlobal:CapeWikiInterface) => {

        let isExisting = false;

        this.app.playerConnected.capes.tyroserv.forEach((oneCapeTyroServ:CapeInterface) => {

          if (oneCapeGlobal.id == oneCapeTyroServ.idCapes){
            isExisting = true;
          }

        })

        if (!isExisting){
          this.recommendCape.push(oneCapeGlobal);
        }

      });

    });


  }

  onSelectCape(capeId: number): void {
    this.currentCapeId = capeId;
  }

}
