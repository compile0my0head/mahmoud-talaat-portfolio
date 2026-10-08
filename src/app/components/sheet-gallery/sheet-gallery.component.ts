import { Component, Input, signal, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetRef } from '../../services/content.models';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-sheet-gallery',
  standalone: true,
  imports: [CommonModule, LightboxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="gallery-wrapper">
      <swiper-container
        #swiperEl
        slides-per-view="auto"
        space-between="12"
        free-mode="true"
        grab-cursor="true"
        navigation="true"
        keyboard="true"
        class="sheet-swiper"
      >
        @for (sheet of sheets; track sheet.id; let i = $index) {
          <swiper-slide class="sheet-slide">
            <div class="thumbnail" (click)="openLightbox(i)">
              <img [src]="sheet.path" [alt]="sheet.alt || sheet.id" loading="lazy">
              <div class="caption mono">{{ sheet.id }}</div>
            </div>
          </swiper-slide>
        }
      </swiper-container>
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
      margin: 0 -0.5rem;
    }
    .sheet-swiper {
      padding: 0.5rem;
    }
    .sheet-slide {
      width: 180px !important;

      @media (max-width: 480px) {
        width: 150px !important;
      }
    }
    .thumbnail {
      cursor: pointer;
      transition: opacity 150ms;

      &:hover {
        opacity: 0.8;
      }

      img {
        width: 100%;
        aspect-ratio: 0.707;
        object-fit: cover;
        border: 1px solid rgba(26,26,26,0.08);
        border-radius: 3px;
        background: rgba(26,26,26,0.03);
        display: block;
      }
    }
    .caption {
      margin-top: 0.4rem;
      text-align: center;
      font-size: 0.72rem;
      color: var(--color-muted);
      letter-spacing: 0.05em;
    }

    /* Swiper nav arrow overrides */
    ::ng-deep .sheet-swiper {
      --swiper-navigation-size: 20px;
      --swiper-navigation-color: var(--color-ink);
      --swiper-theme-color: var(--color-ink);

      .swiper-button-prev,
      .swiper-button-next {
        width: 32px;
        height: 32px;
        background: rgba(255,255,255,0.9);
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        top: 45%;

        &::after {
          font-size: 12px;
          font-weight: 700;
        }
      }
      .swiper-button-prev { left: 4px; }
      .swiper-button-next { right: 4px; }
    }
  `]
})
export class SheetGalleryComponent implements AfterViewInit {
  @Input({ required: true }) sheets!: SheetRef[];
  @Input() projectTitle = '';

  @ViewChild('swiperEl') swiperRef!: ElementRef;

  lightboxOpen = signal(false);
  currentIndex = signal(0);

  get lightboxImages() {
    return this.sheets.map(s => ({
      src: s.path,
      alt: `${this.projectTitle} — ${s.id}`
    }));
  }

  ngAfterViewInit() {
    // Register Swiper web components
    import('swiper/element/bundle').then(({ register }) => {
      register();
    });
  }

  openLightbox(index: number) {
    this.currentIndex.set(index);
    this.lightboxOpen.set(true);
  }
}
