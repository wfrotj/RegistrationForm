import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  // @Input() open: number = 0;
  // @Input() closed: number = 0;

  selectedRadioButtonValue: string = 'All';
  // selelectedRemarksRadioButtonValue: string = '';

  @Output()
  filterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>();
  // filterRemarksButtonChange: EventEmitter<string> = new EventEmitter<string>();

  onradioButtonSelectionChange() {
    this.filterRadioButtonChange.emit(this.selectedRadioButtonValue);
  }
  // onradioButtonRemarksChange() {
  //   this.filterRemarksButtonChange.emit(this.selelectedRemarksRadioButtonValue);
  // }
}
