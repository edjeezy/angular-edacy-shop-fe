import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/search.component';
import { ResuableButtonsComponent } from '../components/resuable-buttons/resuable-buttons.component';
import { MatInputModule } from '@angular/material/input';


const MAT_COMPONENTS = [
  MatInputModule,

]

@NgModule({
  declarations: [
    SearchComponent,
    ResuableButtonsComponent,
  ],
  imports: [
    CommonModule, 
    ...MAT_COMPONENTS
  ],
  exports: [
    SearchComponent,
    ResuableButtonsComponent,
    ...MAT_COMPONENTS
  ],
})
export class SharedModule { }
