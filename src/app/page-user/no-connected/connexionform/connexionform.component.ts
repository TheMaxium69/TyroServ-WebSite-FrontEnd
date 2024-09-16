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

  private app: AppComponent = inject(AppComponent);

  public formConnexion: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  connexion() {
    if (this.formConnexion.valid) {
      this.app.login(this.formConnexion.value.email, this.formConnexion.value.password);
    } else {
      console.log("Form invalide");
    }
  }

}
