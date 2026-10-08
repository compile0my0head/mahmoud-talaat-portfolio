import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { CounterComponent } from '../../components/counter/counter.component';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CounterComponent, FadeInDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  content = inject(ContentService);
}
