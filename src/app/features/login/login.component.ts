import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  constructor(
    private authService: AuthService,
  ) {
    
  }
   
  get email() {
    return this.form?.get('email') as FormControl;
  }

  get password() {
    return this.form?.get('password') as FormControl;
  }

  ngOnInit(): void {
    this.email.valueChanges.pipe(
      // Ajoute un delai de x millisecondes
      delay(2300),
      tap(console.log)
    ).subscribe();

    this.password.valueChanges.pipe(
      // Ajoute un delai de x millisecondes
      tap(console.log)
    ).subscribe();
  }

  setEmail() {
      /* METTRE UNE VALEUR DEPUIS LE TEMPLATE */
      this.email.setValue('test3@test4.com');
  }
  
  handleActivation() {
    /* ENLEVER LES VALIDATEURS */
    this.email.clearValidators();
    this.email.updateValueAndValidity();
    // this.email.addValidators([Validators.maxLength(300)]);

    /* GERER LE DISABLED STATE */
    this.email.disabled ? this.email.enable() : this.email.disable();
  }

  testEmail() {
    console.log('----------------------------------------');
    console.log('valeur', this.email.value);
    console.log('errors', this.email.errors);
    console.log('dirty (il a ete touche) ', this.email.dirty);
    console.log('pristine (il a pas encore touche)', this.email.pristine);
    console.log('disabled (desactive)', this.email.disabled);
    console.log('enabled (active)', this.email.enabled);
    console.log('valid', this.email.valid);
    console.log('invalid', this.email.invalid);
  }
  
  onSubmit() {
    this.authService.login(this.email.value, this.password.value);
  }
}
