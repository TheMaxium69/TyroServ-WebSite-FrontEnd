import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import {UserService} from "../../../_service/user/user.service";
import {ApiReponseInterface} from "../../../_interface/api-reponse.interface";
import iziToast from "izitoast";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skin',
  standalone: true,
  imports: [],
  templateUrl: './skin.component.html',
  styleUrl: './skin.component.css'
})
export class SkinComponent {

  previewUrl:string | ArrayBuffer | null = 'no-skin.png';
  canUpload:boolean = false;

  constructor(protected app: AppComponent,
              private userService:UserService) { }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      if (file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            if ((img.width === 64 && img.height === 64) || (img.width === 64 && img.height === 32)) {
              this.previewUrl = reader.result;
              this.canUpload = true;
            } else {
              iziToast.error({
                title: 'Error',
                message: 'Please select an image with dimensions 64x64 or 64x32.',
                position: 'bottomRight'
              });
              fileInput.value = '';
              this.previewUrl = 'no-skin.png';
              this.canUpload = false;
            }
          };
          img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Please select a PNG image.',
          position: 'bottomRight'
        });
        fileInput.value = '';
        this.previewUrl = 'no-skin.png';
        this.canUpload = false;
      }
    }
  }

  clearFileInput() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
      this.previewUrl = 'no-skin.png'
      this.canUpload = false;
    }
  }

  uploadSkin(){

    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput?.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      if (file.type === 'image/png') {
        this.userService.changeSkin(this.app.setURLUseritium(), this.app.userConnected.useritium.username, this.app.token, file, this.app.createCors(1)).subscribe( (reponseSkin:ApiReponseInterface) => {
          if (reponseSkin.why == "image uploaded and stored successfully"){
            let result = reponseSkin.result;

            if (result && 'skin_name' in result) {

              this.app.playerConnected.skin.type = "png";
              this.app.playerConnected.skin.texture = result.skin_name;

              this.clearFileInput();

              // iziToast.success({
              //   title: 'Success',
              //   message: 'Skin uploaded successfully',
              //   position: 'bottomRight'
              // });

              Swal.fire({
                title: 'Succès!',
                text: 'Votre skin à bien été mise à jour.',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#1611FF'
              })

            }

          } else {

            this.clearFileInput();

            Swal.fire({
              title: 'Erreur!',
              text: reponseSkin.why,
              icon: 'error',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#1611FF'
            })

          }

        });

      }
    }
  }

  resetSkin(){

    Swal.fire({
      icon: "warning",
      title: 'Etes-vous sûr ?',
      text: "Vous êtes sur de vouloir réinitialiser votre skin!",
      showCancelButton: true,
      confirmButtonColor: '#1611FF',
      cancelButtonColor: '#ff4c4c',
      confirmButtonText: 'Oui, réinitialisez-le!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {

        this.userService.resetSkin(this.app.setURLUseritium(), this.app.userConnected.useritium.username, this.app.token, this.app.createCors(1)).subscribe( (reponseSkinReset:ApiReponseInterface) => {
          if (reponseSkinReset.why == "skin reset successfully"){

            this.app.playerConnected.skin.type = this.app.playerConnected.skinPrenium.type;
            this.app.playerConnected.skin.texture = this.app.playerConnected.skinPrenium.texture;

            Swal.fire({
              title: 'Réinitialisé!',
              text: 'Votre skin à bien été réinitialisé.',
              icon: 'success',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#1611FF'
            })

          } else {

            Swal.fire({
              title: 'Erreur!',
              text: reponseSkinReset.why,
              icon: 'error',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#1611FF'
            })
          }
        });

      }
    })

  }

}
