import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchValue: string = '';

  @Output()
  inputTextChanged: EventEmitter<string> = new EventEmitter();

  searchInputValueChanged() {
    this.inputTextChanged.emit(this.searchValue);
  }
}
