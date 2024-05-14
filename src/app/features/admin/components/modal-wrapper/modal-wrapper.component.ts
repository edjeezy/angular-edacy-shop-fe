import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrl: './modal-wrapper.component.css'
})
export class ModalWrapperComponent {

  constructor(
    // Injecte les donnees passees au modal
    @Inject(MAT_DIALOG_DATA) public data: any, 

    // Reference au modal lui meme
    public dialogRef: MatDialogRef<ModalWrapperComponent>
  ) {

  }
  
  handleSave(ev: any) {
    console.log(ev);
    this.dialogRef.close({...ev, currentId: this.data.editObject?.id})
  }

}
