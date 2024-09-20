import {Component, OnInit} from '@angular/core';
import {RejoinComponent} from "../page-home/rejoin/rejoin.component";
import {HeaderComponent} from "../page-home/header/header.component";
import {SupportformComponent} from "./supportform/supportform.component";
import {FaviconService} from "../_service/favicon/favicon.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-page-support',
  standalone: true,
  imports: [
    RejoinComponent,
    HeaderComponent,
    SupportformComponent
  ],
  templateUrl: './page-support.component.html',
  styleUrl: './page-support.component.css'
})
export class PageSupportComponent implements OnInit {

  constructor(private faviconService: FaviconService,
              private app:AppComponent) { }

  ngOnInit() {
    this.faviconService.setFavicon(this.app.faviconDefault);
    this.faviconService.setTitle('Support - TyroServ')
  }

}
