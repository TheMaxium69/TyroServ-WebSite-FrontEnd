import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {HttpHeaders} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {NavbarComponent} from "./global/navbar/navbar.component";
import {IpService} from "./_service/ip/ip.service";
import {FooterComponent} from "./global/footer/footer.component";
import {UserInterface} from "./_interface/user.interface";
import {UserService} from "./_service/user/user.service";
import {ApiReponseInterface} from "./_interface/api-reponse.interface";

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
    private ipService: IpService,
    private userService:UserService,
  ) {
    const cookieToken:string = this.cookieService.get('tokenTyroServ');
    const cookieUser:string = this.cookieService.get('usernameUseritium');

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
  urlApiUseritiumDev: string = "http://useritium.fr/api-externe/";
  // urlApiUseritiumDev: string = "http://localhost/ApiUsertium/";
  urlApiUseritiumProd: string = "http://useritium.fr/api-externe/";
  urlIp:string = "https://tyrolium.fr/Contenu/Php/ip.php?api=json"
  urlSkinHeberge:string = "https://useritium.fr/uploads/skin/"
  urlCapeHeberge:string = "http://vps214.tyrolium.fr/capes/capes/"
  Debug:Boolean = false; // Active la view Serv and Local
  isLoggedIn: boolean = false;
  token: string|any;
  userConnected: UserInterface|any;
  currentDate: Date = new Date();


  /******************************************************************************************************************
   *
   * CONNEXION
   *
   * ******************************************************************************************************************/

  // DECONNEXION
  loggout(){

    this.isLoggedIn = false;
    this.token = '';
    this.userConnected = null;
    this.cookieService.delete("tokenTyroServ");
    this.cookieService.delete("usernameUseritium");

  }

  //LOGIN
  login(email: string, password: string):any {

    this.userService.connexion(this.setURLUseritium(), email, password, this.createCors()).subscribe((reponse:ApiReponseInterface)=>{

      if(reponse.why == "successfully connected"){

        this.isLoggedIn = true;
        this.userConnected = reponse.result;
        this.token = this.userConnected.token;

        this.cookieService.set("tokenTyroServ", this.token)
        this.cookieService.set("usernameUseritium", this.userConnected.useritium.username)

        this.router.navigate(['panel']);

        return "good";

      } else {

        return reponse.why;

      }

    });


  }


  firsLogin(pseudoMC:string, email:string, password:string){

  }


  //Login Avec le Cookie
  loginWithCookie(tokenCookie: string, usernameCookie: string): void {

    this.userService.connexionToken(this.setURLUseritium(), usernameCookie, tokenCookie, this.createCors()).subscribe((reponse:ApiReponseInterface)=>{

      if(reponse.why == "successfully connected"){

        this.isLoggedIn = true;
        this.userConnected = reponse.result;
        this.token = this.userConnected.token;

        this.cookieService.set("tokenTyroServ", this.token)
        this.cookieService.set("usernameUseritium", this.userConnected.useritium.username)

        this.router.navigate(['panel']);

      } else {

        /*GEREZ MESSAGE D'ERREUR*/
        console.log("ERREUR : " + reponse.why )

      }


    });

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

  //CORS
  createCors(typeForm: number = 0): {headers: HttpHeaders} {

    let headers: HttpHeaders;

    headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'})

    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

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

  setURLUseritium():string {

    if (this.AppEnv == "DEV"){
      return this.urlApiUseritiumDev;
    } else if (this.AppEnv == "PROD") {
      return this.urlApiUseritiumProd;
    } else {
      return this.urlApiUseritiumProd;
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
