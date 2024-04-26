import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ProduitsService } from '../../../shared/services/produits/produits.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



interface FormMaker {
  name: string, 
  key: string,
  type: 'text' | 'select' | 'calendar',  
  control: FormControl
}


interface FormOptions {
  name: string,
  value: string | number,
}


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  produitForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(0),
    category: new FormControl(''),
    promo: new FormControl(null),
    promoVal: new FormControl(''),
    sellerPhone: new FormControl(''),
  });

  formMaker: FormMaker[] = [
    { name: 'Nom du produit', key: 'name', type: 'text',  control: this.produitForm.get('name') as FormControl},
    { name: 'Description du produit', key: 'description', type: 'text',  control: this.produitForm.get('description') as FormControl},
    { name: 'Image du produit', key: 'image',  type: 'text', control: this.produitForm.get('image') as FormControl},
    { name: 'Prix du produit', key: 'price',  type: 'text', control: this.produitForm.get('price') as FormControl},
    { name: 'Categuorie du produit', key: 'category', type: 'select',  control: this.produitForm.get('category') as FormControl},
    { name: 'Promo du produit', key: 'promo', type: 'text',  control: this.produitForm.get('promo') as FormControl},
    { name: 'Valeur Promo du produit', key: 'promoVal', type: 'select',  control: this.produitForm.get('promoVal') as FormControl},
    { name: 'Numero de telephone du vendeur', key: 'sellerPhone',  type: 'text', control: this.produitForm.get('sellerPhone') as FormControl},
  ];

  categories: FormOptions[] = [
    {
      name: 'Sac',
      value: 1,
    },
    {
      name: 'Informatique',
      value: 2,
    },
    {
      name: 'Fitness',
      value: 3,
    }
  ];

  promoOptions: FormOptions[] = [
    {
      name: '20%',
      value: 20,
    },
    {
      name: '40%',
      value: 40,
    },
    {
      name: '60%',
      value: 60,
    },
  ]

  constructor(
    private authService: AuthService,
    private prodService: ProduitsService,
    public fb : FormBuilder
  ) {
  }


  getCategories(ctrl: FormMaker): FormOptions[] {
    if (ctrl.type === 'select') {
      if(ctrl.key === 'category') {
        return this.categories;
      }

      if (ctrl.key === 'promoVal') {
       return this.promoOptions 
      }
     }

     return [];
  }

  ajouterUnProduit() {
    console.log(
      this.produitForm.value
    );
    }
  


  logout() {
    this.authService.logout();
  }
}
