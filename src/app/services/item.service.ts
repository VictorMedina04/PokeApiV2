import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemListResponse } from '../interfaces/Item.interfaces';
import { Observable } from 'rxjs';
import { ItemDetailsComponent } from '../components/item-details/item-details.component';
import { ItemDetailsResponse } from '../interfaces/item-details.interface';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  listaItems: ItemListResponse[] = [];

  getItemList(limit: number): Observable<ItemListResponse> {
    return this.http.get<ItemListResponse>(`https://pokeapi.co/api/v2/item?limit=${limit}`);
  }

  getOneItem(id: number): Observable<ItemDetailsResponse> {
    return this.http.get<ItemDetailsResponse>(`https://pokeapi.co/api/v2/item/${id}/`);
  }

}