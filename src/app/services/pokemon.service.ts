import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemon.interfaces';
import { PokemonDetailsResponse } from '../interfaces/pokemon-detail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getPokemonList(limit: number): Observable<PokemonListResponse> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`) as Observable<PokemonListResponse>;
  }


  getOnePokemon(id: number): Observable<PokemonDetailsResponse> {
    return this.http.get<PokemonDetailsResponse>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
