import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  connexion(urlUseritium:string, email:string, mdp:string, headers:{ headers: HttpHeaders}):Observable<ApiReponseInterface>{
    let bodyNoJson = {
      email_useritium: email,
      mdp_useritium: mdp
    };
    let body = JSON.stringify(bodyNoJson);
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=connect", body, headers);
  }

  connexionToken(urlUseritium:string, username:string, token:string, headers:{ headers: HttpHeaders}):Observable<ApiReponseInterface>{
    let bodyNoJson = {
      username_useritium: username,
      token_useritium: token
    };
    let body = JSON.stringify(bodyNoJson);
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=connectToken", body, headers);
  }


  changeSkin(){
    /*SOON*/
  }

  changeCape(urlUseritium:string, username:string, token:string, idCape:number, headers:{ headers: HttpHeaders}):Observable<ApiReponseInterface>{
    let bodyNoJson = {
      username_useritium: username,
      token_useritium: token,
      new_cape_id: idCape
    };
    let body = JSON.stringify(bodyNoJson);
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=changeCape", body, headers);
  }

}
