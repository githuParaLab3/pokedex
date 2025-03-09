import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';

export const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: '**', // Rota wildcard para redirecionar para a página principal
    redirectTo: ''
  }
];
