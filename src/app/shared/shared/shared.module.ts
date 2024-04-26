import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/search.component';
import { ResuableButtonsComponent } from '../components/resuable-buttons/resuable-buttons.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

const MAT_COMPONENTS = [
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
]

@NgModule({
  declarations: [
    SearchComponent,
    ResuableButtonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...MAT_COMPONENTS
  ],
  exports: [
    SearchComponent,
    FormsModule,
    ResuableButtonsComponent,
    HttpClientModule,
    ReactiveFormsModule,
    ...MAT_COMPONENTS
  ],
})
export class SharedModule { }
