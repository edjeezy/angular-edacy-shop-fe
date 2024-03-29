import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/search.component';
import { ResuableButtonsComponent } from '../components/resuable-buttons/resuable-buttons.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

const MAT_COMPONENTS = [
  MatInputModule,
  MatMenuModule
]

@NgModule({
  declarations: [
    SearchComponent,
    ResuableButtonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ...MAT_COMPONENTS
  ],
  exports: [
    SearchComponent,
    FormsModule,
    ResuableButtonsComponent,
    ...MAT_COMPONENTS
  ],
})
export class SharedModule { }
