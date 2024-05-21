import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';

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
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingModule { }
