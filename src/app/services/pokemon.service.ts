import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemon.interfaces';
import { PokemonDetailsResponse } from '../interfaces/pokemon-detail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private http: HttpClient) { }

  getPokemonlist(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon');
  }
  
  getOnePokemon(id: number): Observable<PokemonDetailsResponse> {
  return this.http.get<PokemonDetailsResponse>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
