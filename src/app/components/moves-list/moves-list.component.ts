import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item.interfaces';
import { ItemService } from '../../services/item.service';
import { Moves } from '../../interfaces/moves.interfaces';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrl: './moves-list.component.css'
})
export class MovesListComponent implements OnInit {
  
  listadoMovimientos: Moves[] = [];

  constructor(private itemService : ItemService) { }
  
  ngOnInit(): void {
    this.itemService.getMoveList(20).subscribe((resp=>{
      this.listadoMovimientos = resp.results;
    }));
  }
}
