import { Component, OnInit } from '@angular/core';
import { MovesService } from '../../services/moves.service';
import { MoveResponse } from '../../interfaces/moves.interfaces';


@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.css'
})
export class MovesListComponent implements OnInit {

  listadoMovimientos: MoveResponse[] = [];

  constructor(private moveService: MovesService) { }

  ngOnInit(): void {
    this.moveService.getMoveList(20).subscribe((resp => {
      this.listadoMovimientos = resp.results;
    }));
  }

}
