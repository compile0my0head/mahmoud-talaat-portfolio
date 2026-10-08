import { Component, inject, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AutomationComponent } from './sections/automation/automation.component';
import { WorkingDrawingsComponent } from './sections/working-drawings/working-drawings.component';
import { DesignProjectsComponent } from './sections/design-projects/design-projects.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AutomationComponent,
    WorkingDrawingsComponent,
    DesignProjectsComponent,
    AboutComponent,
    ContactComponent
  ],
  template: `
    <app-nav></app-nav>
    <main>
      @for (section of content.config().sections; track section.id) {
        @if (section.enabled) {
          @switch (section.id) {
            @case ('hero') { <app-hero></app-hero> }
            @case ('automation') { <app-automation></app-automation> }
            @case ('working-drawings') { <app-working-drawings></app-working-drawings> }
            @case ('design-projects') { <app-design-projects></app-design-projects> }
            @case ('about') { <app-about></app-about> }
            @case ('contact') { <app-contact></app-contact> }
          }
        }
      }
    </main>
  `,
  styles: [`
    main {
      width: 100%;
    }
  `]
})
export class AppComponent implements OnInit {
  content = inject(ContentService);

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const cfg = this.content.config();
    const root = this.document.documentElement;
    this.renderer.setStyle(root, '--color-bg', cfg.backgroundColor);
    this.renderer.setStyle(root, '--color-ink', cfg.inkColor);
    this.renderer.setStyle(root, '--color-accent', cfg.accentColor);
  }
}
