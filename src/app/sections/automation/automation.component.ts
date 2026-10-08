import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { CardComponent } from '../../components/card/card.component';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-automation',
  standalone: true,
  imports: [CommonModule, CardComponent, FadeInDirective],
  template: `
    <section id="automation" class="section">
      <div class="container" appFadeIn>
        <div class="section-header">
          <h2>BIM Automation</h2>
          <div class="hairline"></div>
        </div>
        
        <div class="cards-grid">
          @for (item of content.automationItems(); track item.slug) {
            <app-card [item]="item"></app-card>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 7rem 2rem;
      background-color: var(--color-surface);
    }
    .container {
      max-width: 1440px;
      margin: 0 auto;
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 1.5rem;
    }
  `]
})
export class AutomationComponent {
  content = inject(ContentService);
}
