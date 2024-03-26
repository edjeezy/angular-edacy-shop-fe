import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-resuable-button',
  templateUrl: './resuable-buttons.component.html',
  styleUrl: './resuable-buttons.component.css'
})
export class ResuableButtonsComponent {
  @Input() isPrincipal!: boolean;
  @Input() isSecondary!: boolean;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.buttonClicked.emit();
  }
}
