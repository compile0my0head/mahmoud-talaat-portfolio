import { Component, Input, Output, EventEmitter, HostListener, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    @if (visible) {
      <div class="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Image gallery">
        
        <div class="header-bar">
          <div class="image-counter mono">{{ currentIndex + 1 }} / {{ images.length }}</div>
          <button class="close-btn" (click)="onClose()" aria-label="Close">&times;</button>
        </div>

        <swiper-container
          class="lightbox-swiper"
          [initialSlide]="currentIndex"
          (slidechange)="onSlideChange($event)"
          zoom="true"
          navigation="true"
          keyboard="true"
          grab-cursor="true"
        >
          @for (image of images; track image.src; let i = $index) {
            <swiper-slide class="lightbox-slide">
              <div class="swiper-zoom-container">
                <img [src]="image.src" [alt]="image.alt || 'Portfolio image'">
              </div>
              <div class="caption mono">{{ image.alt }}</div>
            </swiper-slide>
          }
        </swiper-container>

      </div>
    }
  `,
  styles: [`
    .lightbox-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(10, 10, 10, 0.95);
      z-index: 2000;
      display: flex;
      flex-direction: column;
      animation: fadeIn 0.2s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      position: absolute;
      top: 0; left: 0; right: 0;
      z-index: 2010;
      pointer-events: none;
    }

    .image-counter {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.85rem;
    }

    .close-btn {
      pointer-events: auto;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: white;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      font-size: 2rem;
      cursor: pointer;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.25);
      }
    }

    .lightbox-swiper {
      width: 100%;
      height: 100%;
    }

    .lightbox-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem 1rem 4rem; /* Leave room for header and caption */
      box-sizing: border-box;
    }

    .swiper-zoom-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }

    .caption {
      position: absolute;
      bottom: 1.5rem;
      left: 0; right: 0;
      text-align: center;
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.85rem;
      pointer-events: none;
    }

    /* Swiper Navigation Customization */
    ::ng-deep .lightbox-swiper {
      --swiper-navigation-color: white;
      --swiper-theme-color: white;
      
      .swiper-button-next, .swiper-button-prev {
        background: rgba(255,255,255,0.1);
        padding: 2rem 1.5rem;
        border-radius: 8px;
        transition: background 0.2s;
        
        &:hover {
          background: rgba(255,255,255,0.2);
        }

        @media (max-width: 768px) {
          display: none; /* Hide arrows on phone, users swipe */
        }
      }
    }
  `]
})
export class LightboxComponent implements AfterViewInit {
  @Input() images: any[] = [];
  @Input() visible = false;
  @Input() currentIndex = 0;
  @Output() close = new EventEmitter<void>();

  ngAfterViewInit() {
    import('swiper/element/bundle').then(({ register }) => {
      register();
    });
  }

  onSlideChange(event: any) {
    const swiper = event.detail[0];
    this.currentIndex = swiper.activeIndex;
  }

  onClose() {
    this.close.emit();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.visible) return;
    if (event.key === 'Escape') this.onClose();
  }
}
