import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TyroServ-WebSite-FontEnd';

  constructor(
    private router: Router,
    // private authService: AuthService,
    private cookieService: CookieService,
    // private ipService: IpService
  ) {
    const cookieToken:string = this.cookieService.get('tokenGamenium');
    const cookieUser:string = this.cookieService.get('userGamenium');

    if (cookieToken && cookieUser){
      this.loginWithCookie(cookieToken, cookieUser);
    }
  }



  /******************************************************************************************************************
   *
   * VARIABLE GLOBAL
   *
   * ******************************************************************************************************************/

  AppEnv: string = "DEV"; // DEV or PROD
  urlApiDev: string = "http://localhost:8000";
  urlApiProd: string = "";
  urlIp:string = "https://tyrolium.fr/Contenu/Php/ip.php?api=json"
  Debug:Boolean = true; // Active la view Serv and Local
  isLoggedIn: boolean = false;
  token: string|any;
  userConnected: /*UserInterface|*/any;
  currentDate: Date = new Date();









}
