import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {HttpHeaders} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {NavbarComponent} from "./global/navbar/navbar.component";
import {IpService} from "./_service/ip/ip.service";
import {FooterComponent} from "./global/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private router: Router,
    private cookieService: CookieService,
    // private authService: AuthService,
    private ipService: IpService,
  ) {
    const cookieToken:string = this.cookieService.get('tokenTyroServ');
    const cookieUser:string = this.cookieService.get('userTyroServ');

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


  /******************************************************************************************************************
   *
   * CONNEXION
   *
   * ******************************************************************************************************************/

  // DECONNEXION
  loggout(){

  }

  //LOGIN
  login(email: string, password: string, saveme: boolean) {


  }


  // Ce connecter et recupere le token
  getToken(email: string, password: string, saveme: boolean){


  }

  // Recupere les information grace au token
  getUserByToken(token: string , saveme: boolean){


  }

  //Login Avec le Cookie
  loginWithCookie(cookieToken: string, userCookieJson: string): void {


  }


  // Verif la connexion
  verifToken() {

    if (!this.token){
      this.isLoggedIn = false;
    }

  }

  /*****************************************************************************************************************
   *
   * FUNCTION GLOBAL
   *
   * ******************************************************************************************************************/

  //CORS With TOKEN
  createCorsToken(isFormData: boolean = false): {headers: HttpHeaders} {

    let headers: HttpHeaders;

    if (!isFormData){
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token,
      });
    } else {
      headers = new HttpHeaders({
        'Authorization': 'Bearer '+this.token,
      });


      headers.append('Content-Type', 'multipart/form-data');


    }
    const options: {headers: HttpHeaders}  = { headers: headers };

    return options;

  }

  //SET URL API
  setURL():string {

    if (this.AppEnv == "DEV"){
      return this.urlApiDev;
    } else if (this.AppEnv == "PROD") {
      return this.urlApiProd;
    } else {
      return this.urlApiProd;
    }

  }

  updateComponent() {

    if (!this.isLoggedIn){

      if (this.token){
        return true;
      } else {
        return false
      }

    } else {
      return this.isLoggedIn;
    }

  }

  getYourIp(){

    this.ipService.getMyIp(this.urlIp).subscribe(reponseTyroIp => {

      return reponseTyroIp.ip;

    });

  }


}
