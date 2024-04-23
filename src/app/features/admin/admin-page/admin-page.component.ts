import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ProduitsService } from '../../../shared/services/produits/produits.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  formMaker = [
    { name: 'Nom du produit', key: 'name', type: 'text',  control: this.produitForm.get('name')},
    { name: 'Description du produit', key: 'description', type: 'text',  control: this.produitForm.get('description')},
    { name: 'Image du produit', key: 'image',  type: 'text', control: this.produitForm.get('image')},
    { name: 'Prix du produit', key: 'price',  type: 'text', control: this.produitForm.get('price')},
    { name: 'Categuorie du produit', key: 'category', type: 'text',  control: this.produitForm.get('category')},
    { name: 'Promo du produit', key: 'promo', type: 'text',  control: this.produitForm.get('promo')},
    { name: 'Valeur Promo du produit', key: 'promoVal', type: 'text',  control: this.produitForm.get('promoVal')},
    { name: 'Numero de telephone du vendeur', key: 'sellerPhone',  type: 'text', control: this.produitForm.get('sellerPhone')},
  ];

  constructor(
    private authService: AuthService,
    private prodService: ProduitsService,
    public fb : FormBuilder
  ) {

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
