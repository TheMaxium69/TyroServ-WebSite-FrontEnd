import {Component, OnInit} from '@angular/core';
import {FaviconService} from "../../_service/favicon/favicon.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-page-terms',
  standalone: true,
  imports: [],
  templateUrl: './page-terms.component.html',
  styleUrl: './page-terms.component.css'
})
export class PageTermsComponent implements OnInit {

  constructor(private faviconService: FaviconService,
              private app:AppComponent) { }

  ngOnInit() {
    this.faviconService.setFavicon(this.app.faviconDefault);
    this.faviconService.setTitle('Termes - TyroServ');
  }

}
