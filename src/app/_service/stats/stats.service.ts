import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats(url:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "/stats");
  }
}
