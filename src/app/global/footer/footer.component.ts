import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { HideService } from '../../_service/hide/hide.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(public hideService: HideService) { }
}
