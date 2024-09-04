import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerInterface } from '../../_interface/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url:string = "http://127.0.0.1:8000/playerOne";

  constructor(private http: HttpClient) { }

  getPlayer(pseudo:string):Observable<PlayerInterface>{
    return this.http.get<PlayerInterface>(this.url+"/"+pseudo);
  }
}
