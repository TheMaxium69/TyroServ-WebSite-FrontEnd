import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";

@Injectable({
  providedIn: 'root'
})
export class RankService {

  constructor(private http: HttpClient) { }

  getRankS1PlayerPreview(url:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "/rank-s1-playerPreview");
  }
  getRankS1Player(url:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "/rank-s1-player");
  }
  getRankS1Faction(url:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "/rank-s1-faction");
  }
  getRankS2PlayerPreview(url:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "/rank-s2-player");
  }


}
