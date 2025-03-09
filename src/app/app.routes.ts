import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent)
  },
  {
    path: 'pokemon/:name',
    loadComponent: () =>
      import('./pokemon-detail/pokemon-detail.component').then(m => m.PokemonDetailComponent)
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pokemon-search/pokemon-search.component').then(m => m.PokemonSearchComponent)
  },
  { path: '**', redirectTo: '' }
];
