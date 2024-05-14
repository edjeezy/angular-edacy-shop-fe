import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleProduct } from '../../../../../shared/interfaces/produit';
import { Observable, delay, firstValueFrom } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../../../../shared/validators/senegal-phone';
import { FormMaker } from '../../../components/admin-form/admin-form.component';
import { CrudService } from '../../../../../shared/services/crud/crud.service';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrl: './details-produits.component.css'
})
export class DetailsProduitsComponent implements OnInit {
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
  
  currentId!: string | null;
  currentProduct!: Observable<SimpleProduct | null>;
  endpoint = "produits";
  constructor(
    private route: ActivatedRoute,
    private prodService: CrudService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.currentId = map.get('id') as string;
      if (this.currentId) {
        this.init(this.currentId);
      }
    });
  }

  private async init(id: string) {
    this.currentProduct = this.prodService.getById(this.endpoint, id);
  }


  save(savedEvent: { form: SimpleProduct, isEdit: boolean }) {
    if (savedEvent.isEdit) {      
      this.prodService.patch( this.endpoint, this.currentId as string, savedEvent.form).subscribe(() => {
        alert('Success');
        this.router.navigate(['/admin/admin-page/produits/liste']);
      });
    } else {
      this.prodService.post(this.endpoint, savedEvent.form).subscribe(() => {
        alert('Success');
        this.router.navigate(['/admin/admin-page/produits/liste']);
      });
    }
  }
}
