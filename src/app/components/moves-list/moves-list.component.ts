import { Component, OnInit } from '@angular/core';
import { MovesService } from '../../services/moves.service';
import { MovesResponse, Moves } from '../../interfaces/moves.interfaces';


@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.css'
})
export class MovesListComponent implements OnInit {

  listadoMovimientos: Moves[] = [];

  constructor(private machineService: MovesService) { }

  ngOnInit(): void {
    this.machineService.getMoveList(1025)
      .subscribe(machineListResult => {
        this.listadoMovimientos = machineListResult.results;
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
