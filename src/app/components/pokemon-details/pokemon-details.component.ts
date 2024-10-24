import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailsResponse } from '../../interfaces/pokemon-detail.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemonId: number | undefined;
  pokemon: PokemonDetailsResponse | undefined;

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));


    this.pokemonService.getOnePokemon(this.pokemonId!).subscribe(pokemonResults => {
      this.pokemon = pokemonResults;
    });

  }

  
}
