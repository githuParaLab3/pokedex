// src/app/app-routing.ts
import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

export const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent },
  { path: 'search', component: PokemonSearchComponent },
  { path: '**', redirectTo: '' }
];
