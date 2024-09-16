import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {RouterLink} from "@angular/router";
import { AppComponent } from '../../../app.component';
import iziToast from "izitoast";


@Component({
  selector: 'app-connexionform',
  standalone: true,
    imports: [
        RouterLink,
        ReactiveFormsModule
    ],
  templateUrl: './connexionform.component.html',
  styleUrl: './connexionform.component.css'
})
export class ConnexionformComponent {

  public email: string = "";
  public password: string = "";
  public pseudoMinecraft: string = "";

  public isVisible: boolean = false;

  private app: AppComponent = inject(AppComponent);

  public formConnexion: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public formMinecraft: FormGroup = new FormGroup({
    pseudoMinecraft: new FormControl(''),
  });

  connexion() {
    if (this.formConnexion.valid) {
      this.email = this.formConnexion.value.email;
      this.password = this.formConnexion.value.password;

      this.app.login(this.formConnexion.value.email, this.formConnexion.value.password)
      .then((result) => {
        if(result === "first connexion"){
          this.isVisible = true;
          iziToast.success({
            title: 'Succès',
            position: 'bottomRight',
            message: 'Bienvenue sur TyroServ, ceci est votre premier connexion, veuillez entrer un pseudo Minecraft'
          });

          /*Ici peut-etre faire un msg c votre premier connexion*/
        } else if (result === "good") {
          localStorage.setItem('connexionRéussie', 'true');
        }
        
        else {
          console.log(result);
          if(result === "non-existent account"){
            iziToast.error({
              title: 'Erreur',
              position: 'bottomRight',
              message: 'Veuillez créer un compte'
            });
          } else if (result === "bad password"){
            iziToast.error({
              title: 'Erreur',
              position: 'bottomRight',
              message: 'Mot de passe incorrect'
            });
          } else if (result === 'indefinite fields'){
            iziToast.error({
              title: 'Erreur',
              position: 'bottomRight',
              message: 'Veuillez remplir tous les champs'
            });
          }

          /*Gestion Err classic (Mdp faux, email faux etc..)*/
        }

      })
      .catch((error) => {
        console.error("Err promise : " + error)
        iziToast.error({
          title: 'Erreur',
          position: 'bottomRight',
          message: 'Une erreur interne est survenue'
        })
      });
    }
  }

  connexionMinecraft() {
   this.app.firstLogin(this.formMinecraft.value.pseudoMinecraft, this.email, this.password)
   .then((result) => {
     if(result !== "good"){
       this.isVisible = true;

       if (result == "pseudo exists"){
         iziToast.error({
           title: 'Erreur',
           position: 'bottomRight',
           message: 'Votre pseudo est déjà utilisé'
         });
       } else {
         iziToast.error({
           title: 'Erreur',
           position: 'bottomRight',
           message: result
         });
       }

     }
   })
     .catch((error) => {
       console.error("Err promise : " + error)
       iziToast.error({
         title: 'Erreur',
         position: 'bottomRight',
         message: 'Une erreur interne est survenue'
       })
     });
  }

}
