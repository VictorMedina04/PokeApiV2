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
    this.pokemonService.getPokemonList(1025)
      .subscribe(pokemonListResult => {
        this.listadoPokemon = pokemonListResult.results;
      });
  }

  getId(url: string): string {
    let subcadenas = url.split('/');
    let id = subcadenas[subcadenas.length - 2];
    return id.padStart(4, '0');
  }
  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }


}
