import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ItemComponent } from './components/item/item.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { MoveDetailsComponent } from './components/move-details/move-details.component';

const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'items', component: ItemComponent },
  { path: 'moves', component: MovesListComponent },
  { path: 'pokemon-details/:id', component: PokemonDetailsComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent },
  { path: 'moves-details/:id', component: MoveDetailsComponent },
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
