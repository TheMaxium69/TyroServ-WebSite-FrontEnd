import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-cape',
  standalone: true,
  imports: [],
  templateUrl: './cape.component.html',
  styleUrl: './cape.component.css'
})
export class CapeComponent implements OnInit {



constructor(protected app:AppComponent){}

  ngOnInit() {


    console.log(this.app.playerConnected.capes);


  }

}
