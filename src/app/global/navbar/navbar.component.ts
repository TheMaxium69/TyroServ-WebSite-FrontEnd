import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import { HideService } from '../../_service/hide/hide.service';
import {AppComponent} from "../../app.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMenuOpen:boolean = false;
  isMobile:boolean = false;


  constructor(public hideService: HideService,
              private router: Router,
              protected app: AppComponent) { }

  ngOnInit(): void {
    this.isMobileScreen();
    window.addEventListener('resize', () => {
      this.isMobileScreen();
    });

    if (this.hideService.isVisible) {
      console.log("je suis inactif");
      return;
    }
    console.log("je suis actif");
  }

  onSearch(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(['/player/', searchTerm]);
    }
  }

  logout() {
    this.app.loggout();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  isMobileScreen() {
    this.isMobile = window.innerWidth < 1060;
  }

}
