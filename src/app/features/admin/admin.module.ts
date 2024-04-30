import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { GestionServicesComponent } from './gestion-services/gestion-services.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';

@NgModule({
  declarations: [
    AdminPageComponent,
     AdminFormComponent, 
     GestionProduitsComponent, 
     GestionServicesComponent,
     GestionCommandesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild([

      {
        path: '',
        redirectTo: 'admin-page',
        pathMatch: 'full',
      },

      {
        path: 'admin-page',
        component: AdminPageComponent,
        children: [
          {
            path: '',
            redirectTo: 'produits',
            pathMatch: 'full',
          },
          {
            path: 'produits',
            component: GestionProduitsComponent,
          },
          {
            path: 'services',
            component: GestionServicesComponent,
          },
          {
            path: 'commandes',
            component: GestionCommandesComponent,
          }
        ]
      }
    ])
  ]
})
export class AdminModule { }
