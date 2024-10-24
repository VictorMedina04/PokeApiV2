import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetailsResponse } from '../../interfaces/pokemon-detail.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemonId: number | undefined;
  pokemon: PokemonDetailsResponse | undefined;

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));


    this.pokemonService.getOnePokemon(this.pokemonId!).subscribe(pokemonResults => {
      this.pokemon = pokemonResults;
    });

  }
  typeToIdMap: { [key: string]: number } = {
    normal: 1,
    fighting: 2,
    flying: 3,
    poison: 4,
    ground: 5,
    rock: 6,
    bug: 7,
    ghost: 8,
    steel: 9,
    fire: 10,
    water: 11,
    grass: 12,
    electric: 13,
    psychic: 14,
    ice: 15,
    dragon: 16,
    dark: 17,
    fairy: 18
  };
  getTypeImageUrl(typeName: string): string {
    const typeId = this.typeToIdMap[typeName];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${typeId}.png`;
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  formatOrder(order: number): string {
    return `#${order.toString().padStart(4, '0')}`;
  }
  goToNextPokemon(): void {
    const nextPokemonId = (this.pokemon?.id || 0) + 1;
    this.router.navigateByUrl(`/pokemon-details/${nextPokemonId}`).then(() => {
      window.location.reload();
    });
  }

  goToPreviousPokemon(): void {
    const nextPokemonId = (this.pokemon?.id || 0) - 1;

    if (nextPokemonId < 1) {
      this.router.navigateByUrl(`/pokemon-list`).then(() => { window.location.reload(); });
    } else {
      this.router.navigateByUrl(`/pokemon-details/${nextPokemonId}`).then(() => {
        window.location.reload();

      });
    }
  }
}
