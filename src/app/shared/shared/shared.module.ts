import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/search.component';
import { ResuableButtonsComponent } from '../components/resuable-buttons/resuable-buttons.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';

const MAT_COMPONENTS = [
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule
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
