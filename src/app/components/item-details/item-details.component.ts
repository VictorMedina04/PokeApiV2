import { Component, Input, OnInit } from '@angular/core';
import { ItemDetailsResponse } from '../../interfaces/item-details.interface';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {

  @Input() itemId: number | undefined;
  item: ItemDetailsResponse | undefined;

  constructor(private itemService: ItemService) { }



  ngOnInit(): void {
    this.itemService.getOneItem(this.itemId!).subscribe((response) => {
      this.item = response;
    });
  }
  getItemId(url: string): number {
    return parseInt(url.split('/')[5]);
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  formatOrder(order: number): string {
    return `#${order.toString().padStart(4, '0')}`;
  }
}
