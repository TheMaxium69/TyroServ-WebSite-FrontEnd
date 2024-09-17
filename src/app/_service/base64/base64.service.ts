import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiReponseInterface} from "../../_interface/api-reponse.interface";

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor(private http: HttpClient) { }

  getMyTextureInBase64(url:string, pictureName:string):Observable<ApiReponseInterface>{
    return this.http.get<ApiReponseInterface>(url + "?pictureName=" + pictureName);
  }

}
