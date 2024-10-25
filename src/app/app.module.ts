import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ItemComponent } from './components/item/item.component';
import { provideHttpClient } from '@angular/common/http';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { MoveDetailsComponent } from './components/move-details/move-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MenuComponent,
    PokemonListComponent,
    ItemComponent,
    PokemonDetailsComponent,
    MovesListComponent,
    ItemDetailsComponent,
    MoveDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
