import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { CanActivatedGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
/*     children: [
      {
        path: 'edit',
        //component: EditLoginComponent,
      }
    ]
 */
  },
  {
    path: 'produits',
    loadChildren:  () => import('./features/produits/produits.module').then(m => m.ProduitsModule),
    canActivate: [ CanActivatedGuard,  ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
