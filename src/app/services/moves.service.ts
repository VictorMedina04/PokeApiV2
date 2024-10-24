import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemListResponse } from '../interfaces/Item.interfaces';
import { Observable } from 'rxjs';
import { MovesListComponent } from '../components/moves-list/moves-list.component';
import { MovesListResponse } from '../interfaces/moves.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getMoveList(limit: number): Observable<MovesListResponse>{
    
    return this.http.get<MovesListComponent>(`https://pokeapi.co/api/v2/machine/`);
  }
 
}