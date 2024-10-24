import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailsResponse } from '../../interfaces/pokemon-detail.interfaces';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemonId: number | undefined;
  pokemon: PokemonDetailsResponse | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getOnePokemon(this.pokemonId!).subscribe(pokemonResults => {
      this.pokemon = pokemonResults;
    });

  }
}
