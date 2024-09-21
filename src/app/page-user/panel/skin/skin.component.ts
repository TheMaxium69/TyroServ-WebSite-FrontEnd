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

  previewUrl:string | ArrayBuffer | null = 'no-skin.png';

  constructor(protected app: AppComponent) { }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      if (file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a PNG image.');
      }
    }
  }

  clearFileInput() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
      this.previewUrl = 'no-skin.png'
    }
  }


}
