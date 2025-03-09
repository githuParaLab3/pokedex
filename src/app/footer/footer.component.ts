// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>&copy; 2025 Minha Pokédex</p>
    </footer>
  `,
  styles: [`
    footer { background: #ef5350; color: white; text-align: center; padding: 1rem; margin-top: 2rem; }
  `]
})
export class FooterComponent {}
