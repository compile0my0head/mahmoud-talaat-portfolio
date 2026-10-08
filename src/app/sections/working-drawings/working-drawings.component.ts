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
          <h2 class="small-caps">WORKING DRAWINGS</h2>
          <div class="hairline"></div>
        </div>
        
        <div class="projects-list">
          @for (project of content.workingDrawingItems(); track project.slug) {
            <div class="project-panel">
              <div class="panel-header">
                <div class="title-group">
                  <h3>{{ project.title }}</h3>
                  <span class="year badge mono">{{ project.year }}</span>
                  @if (project.academic) {
                    <span class="academic-badge small-caps">Academic Project</span>
                  }
                </div>
                <div class="sheet-count mono">{{ project.sheets.length }} Sheets</div>
              </div>
              
              <app-sheet-gallery [sheets]="project.sheets" [projectTitle]="project.title"></app-sheet-gallery>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 6rem 2rem;
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
    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }
    .project-panel {
      background: #fff;
      border: var(--hairline);
      border-radius: 8px;
      padding: 2rem;
    }
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .title-group {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      h3 { font-size: 1.5rem; margin: 0; }
    }
    .badge {
      background: #eee;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.85rem;
    }
    .academic-badge {
      color: var(--color-accent);
      border: 1px solid var(--color-accent);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
    }
    .sheet-count {
      color: rgba(26,26,26,0.6);
      font-size: 0.9rem;
    }
  `]
})
export class WorkingDrawingsComponent {
  content = inject(ContentService);
}
