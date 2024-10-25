import { Component, Input, OnInit } from '@angular/core';
import { MoveDetailsResponse } from '../../interfaces/moves-details.interface';
import { MovesService } from '../../services/moves.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-move-details',
  templateUrl: './move-details.component.html',
  styleUrl: './move-details.component.css'
})
export class MoveDetailsComponent implements OnInit {

  @Input() moveId: number | undefined;
  move: MoveDetailsResponse | undefined;

  constructor(private moveService: MovesService, private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit(): void {
    this.moveId = Number(this.route.snapshot.paramMap.get('id'));
    this.moveService.getOneMove(this.moveId!).subscribe((response) => {
      this.move = response;
    });
  }

  getMoveId(url: string): number {
    return parseInt(url.split('/')[5]);
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  formatOrder(order: number): string {
    return `#${order.toString().padStart(4, '0')}`;
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

}
