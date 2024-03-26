import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resuable-button',
  templateUrl: './resuable-buttons.component.html',
  styleUrl: './resuable-buttons.component.css'
})
export class ResuableButtonsComponent {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.buttonClicked.emit();
  }
}
