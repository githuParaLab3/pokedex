import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importando FormsModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Adicionando FormsModule aqui
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
})
export class PokemonSearchComponent {
  term: string = ''; // A variável de pesquisa diretamente

  constructor(private router: Router) {}

  onSearch(): void {
    // Manipulando o termo de pesquisa de forma simples
    const searchTerm = this.term.trim().toLowerCase();

    console.log('Termo pesquisado:', searchTerm);

    if (searchTerm) {
      // Navega para a rota de detalhe do Pokémon
      this.router.navigate(['/pokemon', searchTerm])
        .then(success => console.log('Navegação bem-sucedida:', success))
        .catch(err => console.error('Erro na navegação:', err));
    } else {
      console.warn('Termo de busca vazio.');
    }
  }
}
