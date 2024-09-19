import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-skin',
  standalone: true,
  imports: [],
  templateUrl: './skin.component.html',
  styleUrl: './skin.component.css'
})
export class SkinComponent {
  constructor(protected app: AppComponent) { }
}
