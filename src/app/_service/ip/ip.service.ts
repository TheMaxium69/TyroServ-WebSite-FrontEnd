import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TyroIpInterface} from "../../_interface/tyro-ip.interface";

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http: HttpClient) { }

  getMyIp(url:string):Observable<TyroIpInterface>{
    return this.http.get<TyroIpInterface>(url);
  }

}
