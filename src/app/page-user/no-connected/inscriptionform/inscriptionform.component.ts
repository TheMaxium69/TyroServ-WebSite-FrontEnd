import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FaviconService} from "../../../_service/favicon/favicon.service";
import {AppComponent} from "../../../app.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  public formInscription: FormGroup = new FormGroup({
    pseudo: new FormGroup({
      pseudo: new FormControl('', [Validators.required]),
    }),
    email: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    password: new FormGroup({
      password: new FormControl('', [Validators.required]),
    }),
    confirmCondition: new FormGroup({
      confirmCondition: new FormControl('', [Validators.required]),
    }),
  });

  constructor(private faviconService: FaviconService) { }

  ngOnInit() {
    this.faviconService.setTitle('Inscription - TyroServ');
  }


  Inscription(){
    
  }

}

