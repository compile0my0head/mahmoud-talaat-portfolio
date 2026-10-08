import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  content = inject(ContentService);
  isScrolled = false;
  isMobileMenuOpen = false;

  get navLinks() {
    const labels: Record<string, string> = {
      'hero': 'Skip',
      'automation': 'Automation',
      'working-drawings': 'Working Drawings',
      'design-projects': 'Design',
      'about': 'About',
      'contact': 'Contact'
    };
    return this.content.enabledSections()
      .filter(id => id !== 'hero')
      .map(id => ({ id, label: labels[id] || id }));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollTo(id: string) {
    this.closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
