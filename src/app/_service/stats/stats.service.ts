import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsInterface } from '../../_interface/stats.interface';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private url:string = "http://localhost:8000/stats";

  constructor(private http: HttpClient) { }

  getStats():Observable<StatsInterface>{
    return this.http.get<StatsInterface>(this.url);
  }
}
