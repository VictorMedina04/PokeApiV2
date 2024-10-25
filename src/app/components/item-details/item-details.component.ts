import { Component, Input, OnInit } from '@angular/core';
import { ItemDetailsResponse } from '../../interfaces/item-details.interface';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {

  @Input() itemId: number | undefined;
  item: ItemDetailsResponse | undefined;

  constructor(private itemService: ItemService,private route: ActivatedRoute,
    private router: Router) { 
    
  }



  ngOnInit(): void {
    
    this.itemId= Number(this.route.snapshot.paramMap.get('id'));

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

  goToNextItem(): void {
    const nextItemId = (this.item?.id || 0) + 1;
    this.router.navigateByUrl(`/item-details/${nextItemId}`).then(() => {
      window.location.reload();
    });
  }

  goToPreviousItem(): void {
    const nextItemId = (this.item?.id || 0) - 1;

    if (nextItemId < 1) {
      this.router.navigateByUrl(`/item-list`).then(() => { window.location.reload(); });
    } else {
      this.router.navigateByUrl(`/item-details/${nextItemId}`).then(() => {
        window.location.reload();

      });
    }
  }
}
