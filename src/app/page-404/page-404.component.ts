import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FaviconService} from "../_service/favicon/favicon.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-page-404',
  standalone: true,
  imports: [],
  templateUrl: './page-404.component.html',
  styleUrl: './page-404.component.css'
})
export class Page404Component implements OnInit {

  constructor(private faviconService: FaviconService,
              private app:AppComponent) { }

  ngOnInit() {
    this.faviconService.setFavicon(this.app.faviconDefault);
    this.faviconService.setTitle('404 - TyroServ');
  }

}
