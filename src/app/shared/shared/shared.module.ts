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
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

const MAT_COMPONENTS = [
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
]

const PRIMENG_COMPONENTS = [
  CarouselModule,
  CardModule
];

@NgModule({
  declarations: [
    SearchComponent,
    ResuableButtonsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...MAT_COMPONENTS,
    ...PRIMENG_COMPONENTS
  ],
  exports: [
    SearchComponent,
    FormsModule,
    ResuableButtonsComponent,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderComponent,
    ...MAT_COMPONENTS,
    ...PRIMENG_COMPONENTS
  ],
})
export class SharedModule { }
