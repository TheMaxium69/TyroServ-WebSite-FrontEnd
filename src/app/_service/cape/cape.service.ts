import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";

@Injectable({
  providedIn: 'root'
})
export class CapeService {

  constructor(private http: HttpClient) { }

  getCapeByPseudo(url:string, pseudo:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "?controller=TyroServ&task=getCapeByPseudo&pseudo=" + pseudo);
  }
}
