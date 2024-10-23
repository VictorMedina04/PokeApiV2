import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  listadoPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }



  ngOnInit(): void {
    this.pokemonService.getPokemonlist()
      .subscribe(pokemonListResult => {
        this.listadoPokemon = pokemonListResult.results;
      });
  }

}
