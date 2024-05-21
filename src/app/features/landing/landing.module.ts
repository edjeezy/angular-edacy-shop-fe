import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesCarousselComponent } from './components/categories-caroussel/categories-caroussel.component';
import { LandingListProductComponent } from './components/landing-list-product/landing-list-product.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
]

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    CategoriesCarousselComponent,
    LandingListProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingModule { }
