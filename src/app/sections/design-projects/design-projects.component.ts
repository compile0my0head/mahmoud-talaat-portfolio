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
            <h2 class="small-caps">DESIGN PROJECTS</h2>
            <div class="hairline"></div>
          </div>
          
          <div class="compact-grid">
            @for (project of content.designProjectItems(); track project.slug) {
              <div class="design-item">
                <img [src]="project.image.path" [alt]="project.image.alt" loading="lazy">
                <div class="overlay">
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
    .compact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }
    .design-item {
      position: relative;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 4px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }
      
      .overlay {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        padding: 2rem 1rem 1rem;
        color: white;
        opacity: 0;
        transition: opacity 0.3s;
        
        h4 { margin-bottom: 0.25rem; font-size: 1.1rem; }
        p { font-size: 0.85rem; opacity: 0.9; margin: 0; }
      }
      
      &:hover {
        img { transform: scale(1.05); }
        .overlay { opacity: 1; }
      }
    }
  `]
})
export class DesignProjectsComponent {
  content = inject(ContentService);
}
