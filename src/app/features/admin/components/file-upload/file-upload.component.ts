import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  @Input() control!: FormControl; 
  @Output() uploaded = new EventEmitter<string | null>(); 

  file: File | null = null;
  @Input() previewUrl: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result; // base 64 image
        this.control.setValue(this.previewUrl);
        this.uploaded.emit(this.previewUrl);
      };
      reader.readAsDataURL(this.file);
    }
  }
}
