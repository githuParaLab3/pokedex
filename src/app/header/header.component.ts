// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header>
      <h1>Pokédex</h1>
      <nav>
         <a routerLink="/">Home</a>
         <a routerLink="/search">Search</a>
      </nav>
    </header>
  `,
  styles: [`
    header { background: #ef5350; color: white; padding: 1rem; }
    nav a { margin-right: 1rem; color: white; text-decoration: none; }
  `]
})
export class HeaderComponent {}
