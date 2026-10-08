import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-design-projects',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  template: `
    @if (content.isSectionEnabled('design-projects')) {
      <section id="design-projects" class="section">
        <div class="container" appFadeIn>
          <div class="section-header">
            <h2>Design Projects</h2>
            <div class="hairline"></div>
          </div>
          
          <div class="compact-grid">
            @for (project of content.designProjectItems(); track project.slug) {
              <div class="design-item">
                <div class="image-wrap">
                  <img [src]="project.image.path" [alt]="project.image.alt" loading="lazy">
                </div>
                <div class="item-info">
                  <h4>{{ project.title }}</h4>
                  <p>{{ project.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: [`
    .section {
      padding: 6rem 2rem;
      background: var(--color-bg);
    }
    .container {
      max-width: 1440px;
      margin: 0 auto;
    }
    .compact-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;

      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 520px) {
        grid-template-columns: 1fr;
      }
    }
    .design-item {
      overflow: hidden;
      border-radius: var(--radius-md);
      background: var(--color-surface);
      border: 1px solid rgba(26,26,26,0.06);
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        border-color: rgba(26,26,26,0.1);

        .image-wrap img {
          transform: scale(1.04);
        }
      }
    }
    .image-wrap {
      aspect-ratio: 4/3;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
    }
    .item-info {
      padding: 1.25rem;

      h4 {
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 0.35rem;
        letter-spacing: -0.01em;
      }
      p {
        font-size: 0.82rem;
        color: rgba(26,26,26,0.55);
        line-height: 1.5;
        margin: 0;
      }
    }
  `]
})
export class DesignProjectsComponent {
  content = inject(ContentService);
}
