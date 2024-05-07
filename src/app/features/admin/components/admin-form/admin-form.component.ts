import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { SimpleProduct } from '../../../../shared/interfaces/produit';
import { AuthService } from '../../../../shared/services/auth.service';
import { ProduitsService } from '../../../../shared/services/produits/produits.service';
import { phoneNumberValidator } from '../../../../shared/validators/senegal-phone';
import { Router } from '@angular/router';



interface FormMaker {
  name: string, 
  key: string,
  type: 'text' | 'select' | 'calendar' | 'img',  
  control: FormControl
}


interface FormOptions {
  name: string,
  value: string | number | boolean,
}

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.css'
})
export class AdminFormComponent implements OnInit {
  @Input() data!: SimpleProduct;
  produitForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    promo: new FormControl(),
    promoVal: new FormControl(''),
    sellerPhone: new FormControl('', [Validators.required, phoneNumberValidator(/^(221|00221|\+221)?(77|78|75|70|76)[0-9]{7}$/)]),
  });
  
  formMaker: FormMaker[] = [
    { name: 'Nom du produit', key: 'name', type: 'text',  control: this.produitForm.get('name') as FormControl},
    { name: 'Description du produit', key: 'description', type: 'text',  control: this.produitForm.get('description') as FormControl},
    { name: 'Image du produit', key: 'image',  type: 'img', control: this.produitForm.get('image') as FormControl},
    { name: 'Prix du produit', key: 'price',  type: 'text', control: this.produitForm.get('price') as FormControl},
    { name: 'Categuorie du produit', key: 'category', type: 'select',  control: this.produitForm.get('category') as FormControl},
    { name: 'Promo du produit', key: 'promo', type: 'select',  control: this.produitForm.get('promo') as FormControl},
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

  isPromoOpts: FormOptions[] = [
    {
      name: 'Oui',
      value: true,
    },
    {
      name: 'Non',
      value: false,
    },
  ]

  previewUrl: string | null = null;

  constructor(
    private authService: AuthService,
    private prodService: ProduitsService,
    public fb : FormBuilder,
    private router: Router
  ) {
  }

  get promoVal() {
    return this.produitForm.get('promoVal') as FormControl;
  }
  
  getControl(key: string) {
    return this.produitForm.get(key) as FormControl;
  } 

  ngOnInit(): void {
    // Methode reactive
      const promo = this.produitForm.get('promo') as FormControl;
      promo.valueChanges.pipe(
        tap(console.log)
      ).subscribe();

      this.initForm();
  }

  onUpload(ev: any) {
    console.log('image', ev);
  }

  private initForm() {
      const produit: SimpleProduct = this.data;
      this.produitForm.get('name')?.setValue(produit.name);
      this.produitForm.get('description')?.setValue(produit.description);
      this.produitForm.get('image')?.setValue(produit.image);
      this.previewUrl = produit.image;
      this.produitForm.get('price')?.setValue(produit.price as string);
      this.produitForm.get('category')?.setValue(produit.category as string);
      // Eviter d'emmettre un evenement
      this.produitForm.get('promo')?.setValue(produit.promo, {emitEvent: false});
      this.produitForm.get('promoVal')?.setValue(produit.promoVal as string);
      this.produitForm.get('sellerPhone')?.setValue(produit.sellerPhone as string);

  }

  getCategories(ctrl: FormMaker): FormOptions[] {
    if (ctrl.type === 'select') {
      if(ctrl.key === 'category') {
        return this.categories;
      }

      if (ctrl.key === 'promoVal') {
       return this.promoOptions 
      }
      
      if (ctrl.key === 'promo') {
        return this.isPromoOpts 
       }
     }

     return [];
  }

  ajouterUnProduit() {
    this.prodService.patchProduct(this.data.id, this.produitForm.value).subscribe(() => {
      alert('Success');
      this.router.navigate(['/admin/admin-page/produits/liste']);
    });
  }
  
  promoChanged(ev: string | number | boolean, ctrl: FormMaker) {
    if (ctrl.key === 'promo' ) {
      const value = ev as boolean;
      if(!value) {
        this.produitForm.get('promoVal')?.disable();
        this.produitForm.get('promoVal')?.reset();
      } else {
        this.produitForm.get('promoVal')?.enable();
      }
    }
  }


  logout() {
    this.authService.logout();
  }
}
