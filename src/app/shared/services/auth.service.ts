import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, interval, of } from 'rxjs';

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

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    console.log('Guard appele', !!user);
    
    return !!user;
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
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}