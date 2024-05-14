import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { SimpleProduct } from '../../../../shared/interfaces/produit';
import { AuthService } from '../../../../shared/services/auth.service';
import { phoneNumberValidator } from '../../../../shared/validators/senegal-phone';
import { Router } from '@angular/router';



export interface FormMaker {
  name: string, 
  key: string,
  type: 'text' | 'select' | 'calendar' | 'img',  
  control: FormControl
}


export interface FormOptions {
  name: string,
  value: string | number | boolean,
}

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.css'
})
export class AdminFormComponent implements OnInit {
  @Input() data!: any;
  @Input() form!: FormGroup;
  @Input() formMaker!: FormMaker[];
  @Output() saveClicked = new EventEmitter();
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
    public fb : FormBuilder,
    private router: Router
  ) {
  }
  
  ngOnInit(): void {
    // Methode reactive
    if (this.form.get('promo')) {      
      const promo = this.form.get('promo') as FormControl;
      promo.valueChanges.pipe(
        tap(console.log)
      ).subscribe();
    }

      this.initForm();
  }

  get promoVal() {
    return this.form.get('promoVal') as FormControl;
  }
  
  getControl(key: string) {
    return this.form.get(key) as FormControl;
  } 

  onUpload(ev: any) {
    console.log('image', ev);
  }

  private initForm() {
    console.log('data', this.data);
    
    if (this.data) {
      for (const ctrl of this.formMaker) {
        ctrl.control?.setValue(this.data?.[ctrl.key])
      }
    }
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
    this.saveClicked.emit({
      form: this.form.value, 
      isEdit: this.data
    })
  }
  
  promoChanged(ev: string | number | boolean, ctrl: FormMaker) {
    if (ctrl.key === 'promo' ) {
      const value = ev as boolean;
      if(!value) {
        this.form.get('promoVal')?.disable();
        this.form.get('promoVal')?.reset();
      } else {
        this.form.get('promoVal')?.enable();
      }
    }
  }


  logout() {
    this.authService.logout();
  }
}
