import { Component, Input, ElementRef, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="counter" [class.animated]="animated">
      <div class="number mono">{{ displayValue() }}+</div>
      <div class="label small-caps">{{ label }}</div>
    </div>
  `,
  styles: [`
    .counter {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-accent);
      line-height: 1;
    }
    .label {
      font-size: 0.8rem;
      color: rgba(26,26,26,0.6);
      margin-top: 0.5rem;
    }
  `]
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input({ required: true }) targetValue!: number;
  @Input({ required: true }) label!: string;
  
  displayValue = signal(0);
  animated = false;
  private observer: IntersectionObserver | null = null;
  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.displayValue.set(this.targetValue);
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.animate();
          this.animated = true;
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    });
    this.observer.observe(this.el.nativeElement);
  }

  animate() {
    const duration = 1500;
    const start = performance.now();
    
    const update = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      this.displayValue.set(Math.floor(this.targetValue * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        this.displayValue.set(this.targetValue);
      }
    };
    
    requestAnimationFrame(update);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
