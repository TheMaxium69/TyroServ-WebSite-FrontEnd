import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {RouterLink} from "@angular/router";
import { AppComponent } from '../../../app.component';


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
      const response = this.app.login(this.formConnexion.value.email, this.formConnexion.value.password)
        if(response === "first connexion"){
          this.isVisible = true;
        }
    } 
  }

  connexionMinecraft() {
   this.app.firstLogin(this.formMinecraft.value.pseudoMinecraft, this.email, this.password)
  }

}
