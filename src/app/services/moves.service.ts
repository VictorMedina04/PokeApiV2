import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovesResponse } from '../interfaces/moves.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor(private http: HttpClient) { }
  

 
  getMoveList(limit: number) : Observable<MovesResponse> {
    return this.http.get<MovesResponse>(`https://pokeapi.co/api/v2/move?limit=${limit}`);
  }
  




 
}