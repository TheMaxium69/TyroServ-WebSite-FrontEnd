import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FaviconService} from "../../../_service/favicon/favicon.service";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-inscriptionform',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './inscriptionform.component.html',
  styleUrl: './inscriptionform.component.css'
})
export class InscriptionformComponent implements OnInit {

  constructor(private faviconService: FaviconService) { }

  ngOnInit() {
    this.faviconService.setTitle('Inscription - TyroServ');
  }

}

