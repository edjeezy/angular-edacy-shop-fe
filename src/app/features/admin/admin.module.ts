import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'admin-produits',
        pathMatch: 'full',
      },

      {
        path: 'admin-produits',
        component: AdminPageComponent,
      }
    ])
  ]
})
export class AdminModule { }
