import { Component, Input, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetRef } from '../../services/content.models';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-sheet-gallery',
  standalone: true,
  imports: [CommonModule, LightboxComponent],
  template: `
    <div class="gallery-wrapper">
      <button class="scroll-btn left" (click)="scroll(-280)" aria-label="Scroll left">&lsaquo;</button>
      
      <div class="strip" #strip>
        @for (sheet of sheets; track sheet.id; let i = $index) {
          <div class="thumbnail" (click)="openLightbox(i)">
            <img [src]="sheet.path" [alt]="sheet.alt || sheet.id" loading="lazy">
            <div class="caption mono">{{ sheet.id }}</div>
          </div>
        }
      </div>
      
      <button class="scroll-btn right" (click)="scroll(280)" aria-label="Scroll right">&rsaquo;</button>
    </div>

    <app-lightbox 
      [images]="lightboxImages" 
      [currentIndex]="currentIndex()"
      [visible]="lightboxOpen()" 
      (close)="lightboxOpen.set(false)">
    </app-lightbox>
  `,
  styles: [`
    :host {
      display: block;
    }
    .gallery-wrapper {
      position: relative;
      overflow: hidden;
    }
    .strip {
      display: flex;
      gap: 1rem;
      overflow-x: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      padding: 0.5rem 0 1rem;
      -ms-overflow-style: none;

      /* Thin custom scrollbar */
      scrollbar-width: thin;
      scrollbar-color: rgba(26,26,26,0.15) transparent;

      &::-webkit-scrollbar {
        height: 4px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(26,26,26,0.15);
        border-radius: 2px;
      }
    }
    .thumbnail {
      scroll-snap-align: start;
      flex: 0 0 180px;
      cursor: pointer;
      transition: opacity 150ms;

      @media (max-width: 480px) {
        flex: 0 0 140px;
      }

      &:hover {
        opacity: 0.8;
      }

      img {
        width: 100%;
        aspect-ratio: 1.414;
        object-fit: cover;
        border: 1px solid rgba(26,26,26,0.06);
        border-radius: var(--radius-sm);
        background: rgba(26,26,26,0.03);
        display: block;
      }
    }
    .caption {
      margin-top: 0.4rem;
      text-align: center;
      font-size: 0.7rem;
      color: var(--color-muted);
      letter-spacing: 0.05em;
    }
    .scroll-btn {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-60%);
      background: var(--color-surface);
      border: 1px solid rgba(26,26,26,0.08);
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 1.2rem;
      line-height: 1;
      cursor: pointer;
      z-index: 5;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      color: var(--color-ink);
      transition: all 150ms;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &.left { left: 0; }
      &.right { right: 0; }

      &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        border-color: rgba(26,26,26,0.15);
      }
    }
  `]
})
export class SheetGalleryComponent {
  @Input({ required: true }) sheets!: SheetRef[];
  @Input() projectTitle = '';
  
  @ViewChild('strip') stripRef!: ElementRef<HTMLDivElement>;
  
  lightboxOpen = signal(false);
  currentIndex = signal(0);
  
  get lightboxImages() {
    return this.sheets.map(s => ({
      src: s.path,
      alt: `${this.projectTitle} — ${s.id}`
    }));
  }

  scroll(offset: number) {
    if (this.stripRef) {
      this.stripRef.nativeElement.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }

  openLightbox(index: number) {
    this.currentIndex.set(index);
    this.lightboxOpen.set(true);
  }
}
