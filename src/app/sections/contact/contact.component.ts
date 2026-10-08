import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
  template: `
    <section id="contact" class="section">
      <div class="container" appFadeIn>
        <div class="section-header">
          <h2>Contact & Downloads</h2>
          <div class="hairline"></div>
        </div>

        <div class="contact-grid">
          <div class="contact-col">
            <h3>Get in Touch</h3>
            <p class="tagline">Open for opportunities in BIM automation and architecture.</p>
            
            <div class="links">
              <a href="mailto:mahmoud.talaat605&#64;gmail.com" class="contact-link">
                <span class="label">Email</span>
                <span class="value mono">mahmoud.talaat605&#64;gmail.com</span>
              </a>
              
              <a href="https://www.linkedin.com/in/mahmoud-talaat605" target="_blank" class="contact-link">
                <span class="label">LinkedIn</span>
                <span class="value mono">in/mahmoud-talaat605</span>
              </a>
            </div>
          </div>

          <div class="downloads-col">
            <h3>Downloads</h3>
            <div class="download-links">
              <a [href]="content.config().portfolioPdf" class="download-item" target="_blank">
                <span class="dl-label">Portfolio</span>
                <span class="dl-detail mono">Web version</span>
              </a>
              <a [href]="content.config().portfolioFullPdf" class="download-item" target="_blank">
                <span class="dl-label">Portfolio</span>
                <span class="dl-detail mono">Full resolution</span>
              </a>
              <a [href]="content.config().cvPdf" class="download-item" target="_blank">
                <span class="dl-label">CV</span>
                <span class="dl-detail mono">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 7rem 2rem;
      background: var(--color-surface);
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;

      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      letter-spacing: -0.01em;
    }
    .tagline {
      font-size: 0.88rem;
      color: var(--color-muted);
      margin-bottom: 2rem;
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .contact-link {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: var(--color-ink);
      padding: 1rem;
      border: 1px solid rgba(26,26,26,0.06);
      border-radius: var(--radius-md);
      transition: all 200ms;

      &:hover {
        border-color: var(--color-accent);
        .value { color: var(--color-accent); }
      }

      .label {
        font-size: 0.65rem;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color-muted);
        margin-bottom: 0.25rem;
      }
      .value {
        font-size: 0.9rem;
        transition: color 200ms;
      }
    }
    .download-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .download-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      color: var(--color-ink);
      padding: 0.85rem 1rem;
      border-bottom: 1px solid rgba(26,26,26,0.06);
      transition: all 200ms;

      &:hover {
        padding-left: 1.25rem;
        color: var(--color-accent);
      }

      .dl-label {
        font-size: 0.9rem;
        font-weight: 500;
      }
      .dl-detail {
        font-size: 0.75rem;
        color: var(--color-muted);
      }
    }
  `]
})
export class ContactComponent {
  content = inject(ContentService);
}
