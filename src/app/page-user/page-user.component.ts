import { Component } from '@angular/core';
import { InscriptionformComponent } from './inscriptionform/inscriptionform.component';

@Component({
  selector: 'app-page-user',
  standalone: true,
  imports: [InscriptionformComponent],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent {

}
