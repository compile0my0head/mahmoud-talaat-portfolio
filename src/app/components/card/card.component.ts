import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationItem } from '../../services/content.models';
import { LightboxComponent } from '../lightbox/lightbox.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, LightboxComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) item!: AutomationItem;
  
  lightboxOpen = signal(false);
  
  get lightboxImages() {
    return (this.item.images || []).map(img => ({
      src: img.path,
      alt: img.alt
    }));
  }

  openLightbox() {
    if (this.item.images?.length) {
      this.lightboxOpen.set(true);
    }
  }
}
