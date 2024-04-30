import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './resuable-buttons.component.html',
  styleUrl: './resuable-buttons.component.css',
})
export class ResuableButtonsComponent {
  @Input() isPrincipal!: boolean;
  @Input() isSecondary!: boolean;
  @Input() btnText!: string;
  @Input() isSubmit!: boolean;
  @Input() isDisabled!: boolean | null;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.buttonClicked.emit();
  }
}
