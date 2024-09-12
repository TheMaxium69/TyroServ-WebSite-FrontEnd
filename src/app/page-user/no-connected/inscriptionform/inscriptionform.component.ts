import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inscriptionform',
  standalone: true,
  imports: [],
  templateUrl: './inscriptionform.component.html',
  styleUrl: './inscriptionform.component.css'
})
export class InscriptionformComponent {

  constructor(private location: Location) {}

  onBack() {
    this.location.back();
  }

}
