import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleProduct } from '../../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  constructor() { }
  panier$ = new BehaviorSubject<SimpleProduct[]>([]);

  ajouter(obj: SimpleProduct) {
    
    this.panier$.next([obj, ...this.panier$.value])
  }

  enlever(obj: SimpleProduct) {
    this.panier$.next(this.panier$.value.filter((el) => obj.id !== el.id))
  }
}
