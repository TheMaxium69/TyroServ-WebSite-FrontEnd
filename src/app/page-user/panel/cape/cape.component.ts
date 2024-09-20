import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import {CapeService} from "../../../_service/cape/cape.service";
import {ApiReponseInterface} from "../../../_interface/api-reponse.interface";

@Component({
  selector: 'app-cape',
  standalone: true,
  imports: [],
  templateUrl: './cape.component.html',
  styleUrl: './cape.component.css'
})
export class CapeComponent implements OnInit {

  currentCapeId: number = 99999999;

  constructor(protected app:AppComponent,
              private capeService:CapeService){}

  ngOnInit() {

    console.log(this.app.playerConnected.capes);

    this.capeService.getCapeByPseudo(this.app.setURLUseritium(), this.app.playerConnected.player.pseudo).subscribe( (reponse:ApiReponseInterface) => {

      if (reponse.status == "true" && reponse.result){

        let idCapeSelected: { cape: string } = reponse.result as { cape: string };

        if (idCapeSelected.cape != null && idCapeSelected.cape != "null"){
          this.currentCapeId = Number(idCapeSelected.cape);
        }
      }

    });


  }

  onSelectCape(capeId: number): void {
    this.currentCapeId = capeId;
  }

}
