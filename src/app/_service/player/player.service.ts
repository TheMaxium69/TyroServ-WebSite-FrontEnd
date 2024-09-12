import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayer(pseudo:string, url:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url+"/playerOne/"+pseudo);
  }

}
