import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveResponse } from '../interfaces/moves.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor(private http: HttpClient) { }
  

  getMoveList(limit: number) : Observable<MoveResponse> {
    return this.http.get<MoveResponse>(`https://pokeapi.co/api/v2/machine`);
  }


 
}