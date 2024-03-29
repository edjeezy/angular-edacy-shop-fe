import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';

const productRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: ':id',
        component: ProductDetailsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(productRoutes),
    CommonModule,
    SharedModule
  ]
})
export class ProduitsModule { }
