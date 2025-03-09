import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  searchControl = new FormControl('');

  constructor(private router: Router) {}

  onSearch(): void {
    // Exibe logs para facilitar o debug
    console.log("Search triggered");
    const value = this.searchControl.value;
    console.log("Raw value:", value);
    const term = (value || '').trim().toLowerCase();
    console.log("Processed term:", term);
    if (term) {
      this.router.navigate(['/pokemon', term])
        .then(success => console.log("Navigation success:", success))
        .catch(err => console.error("Navigation error:", err));
    } else {
      console.warn("Search term is empty");
    }
  }
}
