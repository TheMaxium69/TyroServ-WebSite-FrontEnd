import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import { HideService } from '../../_service/hide/hide.service';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public hideService: HideService,
              private router: Router,
              protected app: AppComponent) { }

  onSearch(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(['/player/', searchTerm]);
    }
  }

  logout() {
    this.app.loggout();
  }

}
