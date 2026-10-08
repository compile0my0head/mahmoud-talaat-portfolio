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
      <button class="scroll-btn left" (click)="scroll(-300)" aria-label="Scroll left">&lsaquo;</button>
      
      <div class="strip" #strip>
        @for (sheet of sheets; track sheet.id; let i = $index) {
          <div class="thumbnail" (click)="openLightbox(i)">
            <img [src]="sheet.path" [alt]="sheet.alt || sheet.id" loading="lazy">
            <div class="caption mono">{{ sheet.id }}</div>
          </div>
        }
      </div>
      
      <button class="scroll-btn right" (click)="scroll(300)" aria-label="Scroll right">&rsaquo;</button>
    </div>

    <app-lightbox 
      [images]="lightboxImages" 
      [currentIndex]="currentIndex()"
      [visible]="lightboxOpen()" 
      (close)="lightboxOpen.set(false)">
    </app-lightbox>
  `,
  styles: [`
    .gallery-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }
    .strip {
      display: flex;
      gap: 1.5rem;
      overflow-x: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      padding: 1rem 0;
      scrollbar-width: thin;
      
      &::-webkit-scrollbar {
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(26,26,26,0.2);
        border-radius: 3px;
      }
    }
    .thumbnail {
      scroll-snap-align: start;
      flex: 0 0 250px;
      cursor: pointer;
      transition: transform 0.2s;
      
      &:hover {
        transform: translateY(-5px);
      }
      
      img {
        width: 100%;
        aspect-ratio: 1.414; /* A-series paper ratio */
        object-fit: cover;
        border: var(--hairline);
        background: #f0f0f0;
      }
    }
    .caption {
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: var(--color-ink);
    }
    .scroll-btn {
      display: none;
      background: white;
      border: var(--hairline);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 10;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      
      @media (min-width: 768px) {
        display: block;
        position: absolute;
      }
      
      &.left { left: -20px; }
      &.right { right: -20px; }
      &:hover { background: var(--color-bg); }
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
      alt: `${this.projectTitle} - ${s.id}`
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
