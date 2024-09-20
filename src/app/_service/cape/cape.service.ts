import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";
import {CapeInterface} from "../../_interface/player-interface/cape.interface";
import {CapeWikiInterface} from "../../_interface/cape-wiki.interface";

@Injectable({
  providedIn: 'root'
})
export class CapeService {

  constructor(private http: HttpClient) { }

  getCapeByPseudo(url:string, pseudo:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "?controller=TyroServ&task=getCapeByPseudo&pseudo=" + pseudo);
  }

  getAllCape(url:string):Observable<CapeWikiInterface[]>{
    return this.http.get<CapeWikiInterface[]>(url + "/getAllCape/");
  }
}
