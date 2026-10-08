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
        <div class="contact-card">
          <h2 class="title">Let's Connect</h2>
          <p class="subtitle">Open for opportunities in BIM automation and architecture.</p>
          
          <div class="links">
            <a href="mailto:mahmoud.talaat605@gmail.com" class="contact-link">
              <span class="small-caps">Email</span>
              <span class="mono">mahmoud.talaat605&#64;gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/mahmoud-talaat605" target="_blank" class="contact-link">
              <span class="small-caps">LinkedIn</span>
              <span class="mono">in/mahmoud-talaat605</span>
            </a>
          </div>
          
          <div class="downloads">
            <a [href]="content.config().portfolioPdf" class="btn btn-primary" target="_blank">Portfolio (Web)</a>
            <a [href]="content.config().portfolioFullPdf" class="btn btn-outline" target="_blank">Full-Res Portfolio</a>
            <a [href]="content.config().cvPdf" class="btn btn-outline" target="_blank">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 8rem 2rem;
      background: var(--color-bg);
      display: flex;
      justify-content: center;
    }
    .contact-card {
      background: #fff;
      padding: 4rem;
      border-radius: 8px;
      border: var(--hairline);
      text-align: center;
      max-width: 600px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(0,0,0,0.02);
    }
    .title {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-ink);
    }
    .subtitle {
      color: rgba(26,26,26,0.6);
      margin-bottom: 3rem;
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    .contact-link {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: var(--color-ink);
      padding: 1rem;
      border-radius: 4px;
      transition: background 0.2s;
      
      &:hover {
        background: rgba(26,26,26,0.02);
        color: var(--color-accent);
      }
      
      .small-caps { font-size: 0.85rem; color: rgba(26,26,26,0.5); margin-bottom: 0.25rem; }
      .mono { font-size: 1.1rem; }
    }
    .downloads {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s;
      
      &.btn-primary {
        background-color: var(--color-accent);
        color: white;
        &:hover { opacity: 0.9; }
      }
      
      &.btn-outline {
        border: 1px solid var(--color-ink);
        color: var(--color-ink);
        &:hover { background-color: rgba(26,26,26,0.05); }
      }
    }
  `]
})
export class ContactComponent {
  content = inject(ContentService);
}
