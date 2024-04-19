import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, from, interval, of } from 'rxjs';
import { SimpleProduct } from '../interfaces/produit';

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
  loginStatus$ = new BehaviorSubject(false);

  getStatus() {
    return this.loginStatus$.asObservable();
  }

  private setStatus(stat: boolean) {
    this.loginStatus$.next(stat);
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    console.log('Guard appele', !!user);
    this.setStatus(true);
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
    this.setStatus(false);
    this.router.navigate(['/login']);
  }
}