import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  template: `
    @if (content.isSectionEnabled('about')) {
      <section id="about" class="section">
        <div class="container" appFadeIn>
          <div class="section-header">
            <h2 class="small-caps">ABOUT</h2>
            <div class="hairline"></div>
          </div>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="dot"></div>
              <div class="content">
                <div class="year mono">2019 - 2024</div>
                <h3>B.Sc. Architecture</h3>
                <p>Faculty of Fine Arts, Alexandria University</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="dot"></div>
              <div class="content">
                <div class="year mono">May - Nov 2025</div>
                <h3>Intensive Code Camp (.NET & Generative AI)</h3>
                <p>Information Technology Institute (ITI)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
  `,
  styles: [`
    .section {
      padding: 6rem 2rem;
      background: #fff;
    }
    .container {
      max-width: 800px;
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
    .timeline {
      position: relative;
      padding-left: 2rem;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: rgba(26,26,26,0.1);
      }
    }
    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
      
      &:last-child { margin-bottom: 0; }
      
      .dot {
        position: absolute;
        left: -2.35rem;
        top: 0.25rem;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--color-accent);
        border: 3px solid #fff;
      }
      
      .year {
        color: var(--color-accent);
        font-size: 0.9rem;
        margin-bottom: 0.25rem;
      }
      
      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
        color: var(--color-ink);
      }
      
      p {
        color: rgba(26,26,26,0.7);
      }
    }
  `]
})
export class AboutComponent {
  content = inject(ContentService);
}
