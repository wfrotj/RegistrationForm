import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() beginner: number = 0;
  @Input() intermediate: number = 0;
  @Input() advance: number = 0;
}
