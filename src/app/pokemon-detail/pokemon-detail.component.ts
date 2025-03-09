import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from '../pokedex.service'; // PokedexService
import { Location } from '@angular/common'; // Location
import { TitleCasePipe } from '@angular/common'; // TitleCasePipe
import { NgIf, NgForOf } from '@angular/common'; // NgIf e NgFor

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [TitleCasePipe, NgIf, NgForOf], // Importa as diretivas e pipe necessários
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService, // PokedexService
    private location: Location // Serviço Location para voltar
  ) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.pokedexService.getPokemon(name).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  goBack(): void {
    this.location.back(); // Volta para a página anterior
  }
}
