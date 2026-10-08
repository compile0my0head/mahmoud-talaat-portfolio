import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible) {
      <div class="lightbox-overlay" (click)="onClose()" role="dialog" aria-modal="true" aria-label="Image gallery">
        <button class="close-btn" (click)="onClose()" aria-label="Close">&times;</button>
        
        <div class="lightbox-content" (click)="$event.stopPropagation()">
          @if (images.length > 1) {
            <button class="nav-btn prev" (click)="prev()" aria-label="Previous image">&lsaquo;</button>
          }
          
          <div class="image-container">
            <img [src]="images[currentIndex].src" [alt]="images[currentIndex].alt || 'Portfolio image'">
            <div class="caption mono">{{ images[currentIndex].alt || 'Image ' + (currentIndex + 1) }}</div>
          </div>

          @if (images.length > 1) {
            <button class="nav-btn next" (click)="next()" aria-label="Next image">&rsaquo;</button>
          }
        </div>
      </div>
    }
  `,
  styles: [`
    .lightbox-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.9);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .image-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        max-width: 100%;
        max-height: 85vh;
        object-fit: contain;
      }
    }
    .caption {
      color: white;
      margin-top: 1rem;
      font-size: 0.9rem;
    }
    .close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: none;
      border: none;
      color: white;
      font-size: 3rem;
      cursor: pointer;
      line-height: 1;
    }
    .nav-btn {
      background: rgba(255,255,255,0.1);
      border: none;
      color: white;
      font-size: 3rem;
      padding: 1rem;
      cursor: pointer;
      border-radius: 4px;
      &:hover { background: rgba(255,255,255,0.2); }
    }
  `]
})
export class LightboxComponent {
  @Input() images: any[] = [];
  @Input() visible = false;
  @Input() currentIndex = 0;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  next() {
    if (this.images.length) {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }

  prev() {
    if (this.images.length) {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.visible) return;
    if (event.key === 'Escape') this.onClose();
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }
}
