import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import { HideService } from '../../_service/hide/hide.service';

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
              private router: Router) { }

  onSearch(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(['/player/', searchTerm]);
    }
  }

}
