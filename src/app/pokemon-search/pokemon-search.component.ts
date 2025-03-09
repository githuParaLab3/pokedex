import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  // Utilizando FormGroup para o formulário de busca
  searchForm: FormGroup = new FormGroup({
    term: new FormControl('')
  });

  constructor(private router: Router) {}

  onSearch(): void {
    // Acessa o valor do formulário de forma segura
    const rawTerm = this.searchForm.get('term')?.value;
    const term = (rawTerm || '').trim().toLowerCase();

    console.log('Termo pesquisado:', term);

    if (term) {
      // Navega para a rota de detalhe do Pokémon
      this.router.navigate(['/pokemon', term])
        .then(success => console.log('Navegação bem-sucedida:', success))
        .catch(err => console.error('Erro na navegação:', err));
    } else {
      console.warn('Termo de busca vazio.');
    }
  }
}
