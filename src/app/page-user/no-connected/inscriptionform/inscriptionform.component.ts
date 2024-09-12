import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inscriptionform',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './inscriptionform.component.html',
  styleUrl: './inscriptionform.component.css'
})
export class InscriptionformComponent {

}
