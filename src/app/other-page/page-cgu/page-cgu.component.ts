import {Component, OnInit} from '@angular/core';
import {FaviconService} from "../../_service/favicon/favicon.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-page-cgu',
  standalone: true,
  imports: [],
  templateUrl: './page-cgu.component.html',
  styleUrl: './page-cgu.component.css'
})
export class PageCguComponent implements OnInit {

  constructor(private faviconService: FaviconService,
              private app:AppComponent) { }

  ngOnInit() {
    this.faviconService.setFavicon(this.app.faviconDefault);
    this.faviconService.setTitle('CGU - TyroServ');
  }

}
