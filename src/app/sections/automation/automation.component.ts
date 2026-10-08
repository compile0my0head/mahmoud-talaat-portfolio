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
          <h2 class="small-caps">BIM AUTOMATION</h2>
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
      padding: 6rem 2rem;
      background-color: #fff;
    }
    .container {
      max-width: 1440px;
      margin: 0 auto;
    }
    .section-header {
      margin-bottom: 3rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      
      h2 { font-size: 1.2rem; color: var(--color-accent); }
    }
    .hairline {
      flex: 1;
      height: 1px;
      background-color: rgba(26,26,26,0.1);
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: var(--grid-gap);
    }
  `]
})
export class AutomationComponent {
  content = inject(ContentService);
}
