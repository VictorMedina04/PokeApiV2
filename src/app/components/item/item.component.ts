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

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItemList(304).subscribe((resp => {
      this.listadoObjetos = resp.results;
    }));
  }

  getImg(imagen: string) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${imagen}.png`;
  }

  getItemId(url: string): string {
    let subcadenas = url.split('/');
    let id = subcadenas[subcadenas.length - 2];
    return id.padStart(4, '0');
  }

  
}
