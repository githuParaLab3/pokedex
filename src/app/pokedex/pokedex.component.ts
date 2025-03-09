import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule], // Não precisa mais importar HttpClientModule aqui
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  selectedPokemon: any;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokedexService.getPokemons(20, 0).subscribe(response => {
      this.pokemons = response.results;
    }, (error) => {
      console.error("Erro ao carregar pokemons: ", error);
    });
  }

  loadPokemonDetails(name: string): void {
    this.pokedexService.getPokemon(name).subscribe(response => {
      this.selectedPokemon = response;
    }, (error) => {
      console.error("Erro ao carregar detalhes do pokemon: ", error);
    });
  }
}
