import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/Item.interfaces';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  

  listadoObjetos: Item[] = [];

  constructor(private itemService : ItemService) { }
  
  ngOnInit(): void {
    this.itemService.getItemList().subscribe((resp=>{
      this.listadoObjetos = resp.results;
    }));
  }

  getImg(imagen : string){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${imagen}.png`;
  }

}
