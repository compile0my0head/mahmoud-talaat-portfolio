import { Injectable, signal, computed } from '@angular/core';
import { SITE_CONFIG, AUTOMATION_ITEMS, WORKING_DRAWING_ITEMS, DESIGN_PROJECT_ITEMS } from './content.generated';
import { SectionId, LOCKED_SECTIONS } from './content.models';

@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly config = signal(SITE_CONFIG);
  readonly automationItems = signal(AUTOMATION_ITEMS.filter(i => i.enabled).sort((a, b) => a.order - b.order));
  readonly workingDrawingItems = signal(WORKING_DRAWING_ITEMS.filter(i => i.enabled).sort((a, b) => a.order - b.order));
  readonly designProjectItems = signal(DESIGN_PROJECT_ITEMS.filter(i => i.enabled).sort((a, b) => a.order - b.order));
  
  readonly enabledSections = computed(() => 
    this.config().sections.filter(s => s.enabled).map(s => s.id)
  );

  isSectionEnabled(id: SectionId): boolean {
    return this.enabledSections().includes(id);
  }
}
