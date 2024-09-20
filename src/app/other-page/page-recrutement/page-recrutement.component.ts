import {Component, OnInit} from '@angular/core';
import {FaviconService} from "../../_service/favicon/favicon.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-page-recrutement',
  standalone: true,
  imports: [],
  templateUrl: './page-recrutement.component.html',
  styleUrl: './page-recrutement.component.css'
})
export class PageRecrutementComponent implements OnInit {

  constructor(private faviconService: FaviconService,
              private app:AppComponent) { }

  ngOnInit() {
    this.faviconService.setFavicon(this.app.faviconDefault);
    this.faviconService.setTitle('Recrutements - TyroServ');
  }

}
