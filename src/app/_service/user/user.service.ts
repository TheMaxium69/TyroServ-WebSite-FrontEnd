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
    const body = `email_useritium=${encodeURIComponent(email)}&mdp_useritium=${encodeURIComponent(mdp)}`;
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=connect", body, headers);
  }

  firstConnexion(urlUseritium:string,pseudoMC:string, email:string, mdp:string, headers:{ headers: HttpHeaders}):Observable<ApiReponseInterface>{
    const body = `email_useritium=${encodeURIComponent(email)}&mdp_useritium=${encodeURIComponent(mdp)}&pseudo_tyroserv=${encodeURIComponent(pseudoMC)}`;
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=connect", body, headers);
  }

  connexionToken(urlUseritium:string, username:string, token:string, headers:{ headers: HttpHeaders}):Observable<ApiReponseInterface>{
    const body = `username_useritium=${encodeURIComponent(username)}&token_useritium=${encodeURIComponent(token)}`;
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=connectToken", body, headers);
  }


  changeSkin(){
    /*SOON*/
  }

  changeCape(urlUseritium:string, username:string, token:string, idCape:number, headers:{ headers: HttpHeaders}):Observable<ApiReponseInterface>{
    const body = `username_useritium=${encodeURIComponent(username)}&token_useritium=${encodeURIComponent(token)}&new_cape_id=${encodeURIComponent(idCape)}`;
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=changeCape", body, headers);
  }

  inscription(urlUseritium:string, pseudo:string, email:string, mdp:string, cg:boolean,headers:{ headers: HttpHeaders}):Observable<ApiReponseInterface>{
    const body = `email_useritium=${encodeURIComponent(email)}&mdp_useritium=${encodeURIComponent(mdp)}&pseudo_tyroserv=${encodeURIComponent(pseudo)}&cg=${encodeURIComponent(cg)}`;
    return this.http.post<ApiReponseInterface>(urlUseritium + "?controller=TyroServ&task=inscription", body, headers);
  }
}
