import {Component, OnInit} from '@angular/core';
import {FaviconService} from "../../_service/favicon/favicon.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-page-cgv',
  standalone: true,
  imports: [],
  templateUrl: './page-cgv.component.html',
  styleUrl: './page-cgv.component.css'
})
export class PageCgvComponent implements OnInit {

  constructor(private faviconService: FaviconService,
              private app:AppComponent) { }

  ngOnInit() {
    this.faviconService.setFavicon(this.app.faviconDefault);
    this.faviconService.setTitle('CGV - TyroServ');
  }

}
