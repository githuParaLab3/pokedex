// src/app/components/pokemon-list/pokemon-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokedexService.getPokemons(100, 0).subscribe(response => {
      this.pokemons = response.results;
    });
  }
}
