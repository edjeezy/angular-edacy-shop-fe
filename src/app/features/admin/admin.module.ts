import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { GestionProduitsComponent } from './gestion-produits/gestion-produits.component';
import { GestionServicesComponent } from './gestion-services/gestion-services.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';
import { ListeProduitsComponent } from './gestion-produits/pages/liste-produits/liste-produits.component';
import { DetailsProduitsComponent } from './gestion-produits/pages/details-produits/details-produits.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AdminPageComponent,
     AdminFormComponent, 
     GestionProduitsComponent, 
     GestionServicesComponent,
     GestionCommandesComponent,
     ListeProduitsComponent,
     DetailsProduitsComponent,
     FileUploadComponent],
  imports: [
    CommonModule,
    SharedModule,
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
            children: [
              {
                path: '',
                redirectTo: 'liste',
                pathMatch: 'full',
              },
              {
                path: 'liste',
                component: ListeProduitsComponent,
              },
              {
                path: 'details/:id',
                component: DetailsProduitsComponent,
              },
              {
                path: 'create',
                component: DetailsProduitsComponent,
              }
            ],
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
