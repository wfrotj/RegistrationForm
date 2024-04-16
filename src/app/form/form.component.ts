import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  displayNotification: boolean = false;

  closeNotificaiton() {
    this.displayNotification = true;
  }
}
