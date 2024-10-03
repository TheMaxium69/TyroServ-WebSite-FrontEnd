import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import {CapeService} from "../../../_service/cape/cape.service";
import {ApiReponseInterface} from "../../../_interface/api-reponse.interface";
import {CapeWikiInterface} from "../../../_interface/cape-wiki.interface";
import {CapeInterface} from "../../../_interface/player-interface/cape.interface";
import iziToast from "izitoast";
import {UserService} from "../../../_service/user/user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cape',
  standalone: true,
  imports: [],
  templateUrl: './cape.component.html',
  styleUrl: './cape.component.css'
})
export class CapeComponent implements OnInit {

  dbCapeId:number|undefined;
  currentCapeId: number = 99999999;
  recommendCape: CapeWikiInterface[] = [];

  constructor(protected app:AppComponent,
              private capeService:CapeService,
              private userService:UserService){}

  ngOnInit() {

    /* GET CAPE SELECTED */
    this.capeService.getCapeByPseudo(this.app.setURLUseritium(), this.app.playerConnected.player.pseudo).subscribe( (reponse:ApiReponseInterface) => {
      if (reponse.status == "true" && reponse.result){
        let idCapeSelected: { cape: string } = reponse.result as { cape: string };
        if (idCapeSelected.cape != null && idCapeSelected.cape != "null"){
          this.currentCapeId = Number(idCapeSelected.cape);
          this.dbCapeId = Number(idCapeSelected.cape);
        } else if (this.app.playerConnected.capes.tyroserv) {
          this.app.playerConnected.capes.tyroserv.forEach((oneCapeTyroServ:CapeInterface) => {
            if (oneCapeTyroServ.isSelected){
              this.currentCapeId = Number(oneCapeTyroServ.idCapes);
              this.dbCapeId = Number(oneCapeTyroServ.idCapes);
            }
          })
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

  updateCape(){
    this.userService.changeCape(this.app.setURLUseritium(), this.app.playerConnected.player.pseudo, this.app.userConnected.token, this.currentCapeId, this.app.createCors()).subscribe((response: ApiReponseInterface) => {
      if (response.status == "true") {
        this.dbCapeId = this.currentCapeId;
        /*iziToast.success({
          title: 'Success',
          message: 'Cape updated successfully',
          position: 'bottomRight'
        });*/
        Swal.fire({
          title: 'Succès!',
          text: 'Votre cape à bien été mise à jour.',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#1611FF'
        })

      } else {
       /* iziToast.error({
          title: 'Error',
          message: 'Failed to update cape',
          position: 'bottomRight'
        });*/
        Swal.fire({
          title: 'Erreur!',
          text: 'Échec de la mise à jour de la cape',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#1611FF'
        })
      }
    });

  }

}
