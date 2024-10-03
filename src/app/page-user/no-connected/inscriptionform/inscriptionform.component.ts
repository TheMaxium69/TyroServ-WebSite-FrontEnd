import {Component, inject, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FaviconService} from "../../../_service/favicon/favicon.service";
import {AppComponent} from "../../../app.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiReponseInterface } from '../../../_interface/api-reponse.interface';

@Component({
  selector: 'app-inscriptionform',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './inscriptionform.component.html',
  styleUrl: './inscriptionform.component.css'
})
export class InscriptionformComponent implements OnInit {

  private app: AppComponent = inject(AppComponent);

  public formInscription: FormGroup = new FormGroup({
    pseudo: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmCondition: new FormControl(false, [Validators.requiredTrue]),
  });

  constructor(private faviconService: FaviconService) { }

  ngOnInit() {
    this.faviconService.setTitle('Inscription - TyroServ');
    window.location.href = 'https://useritium.fr/connect.php';
  }


  Inscription(){

  }

}
