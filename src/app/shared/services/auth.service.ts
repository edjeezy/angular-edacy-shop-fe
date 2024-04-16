import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

enum Roles {
  ADMIN,
  USER
}

// Creer un signleton
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private router: Router
  ) {
  }

  login(email: string, mdp: string) {
    const listofMails = [ 'test@test.com', 'admin@test.com'];
    const passwordCheck = 'password';

    if( listofMails.includes(email) &&  mdp === passwordCheck) {
      const data = {
        mail: email,
        role: Roles.USER,
      };

      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/produits']);
    } else {
      alert('Email ou mot de passe incorrect');
    }
  }

  logout() {
    
  }
}