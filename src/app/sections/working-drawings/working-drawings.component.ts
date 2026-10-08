import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { SheetGalleryComponent } from '../../components/sheet-gallery/sheet-gallery.component';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-working-drawings',
  standalone: true,
  imports: [CommonModule, SheetGalleryComponent, FadeInDirective],
  template: `
    <section id="working-drawings" class="section">
      <div class="container" appFadeIn>
        <div class="section-header">
          <h2>Working Drawings</h2>
          <div class="hairline"></div>
        </div>
        
        <div class="projects-list">
          @for (project of content.workingDrawingItems(); track project.slug) {
            <div class="project-panel">
              <div class="panel-header">
                <div class="title-group">
                  <h3>{{ project.title }}</h3>
                  <span class="year mono">{{ project.year }}</span>
                  @if (project.academic) {
                    <span class="academic-badge">Academic</span>
                  }
                </div>
                <div class="meta mono">{{ project.sheets.length }} Sheets</div>
              </div>
              @if (project.description) {
                <p class="project-desc">{{ project.description }}</p>
              }
              <app-sheet-gallery [sheets]="project.sheets" [projectTitle]="project.title"></app-sheet-gallery>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 7rem 2rem;
    }
    .container {
      max-width: 1440px;
      margin: 0 auto;
    }
    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }
    .project-panel {
      background: var(--color-surface);
      border: 1px solid rgba(26,26,26,0.06);
      border-radius: var(--radius-md);
      padding: 2rem;
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    .title-group {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
        letter-spacing: -0.01em;
      }
    }
    .year {
      font-size: 0.75rem;
      color: var(--color-muted);
    }
    .academic-badge {
      font-size: 0.65rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-accent);
      border: 1px solid rgba(31, 92, 153, 0.2);
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-sm);
    }
    .meta {
      color: var(--color-muted);
      font-size: 0.78rem;
    }
    .project-desc {
      font-size: 0.88rem;
      color: var(--color-muted);
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
  `]
})
export class WorkingDrawingsComponent {
  content = inject(ContentService);
}
