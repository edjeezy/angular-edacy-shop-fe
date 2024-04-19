import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable, Subscription, tap } from 'rxjs';
import { SimpleProduct } from '../../../shared/interfaces/produit';
import { createProducts } from '../../../shared/donnees/produit.generator';
import { ProduitsService } from '../../../shared/services/produits/produits.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  produits!: SimpleProduct[];
  prodRef!: Subscription
  constructor(
    private authervice: AuthService,
    private productService: ProduitsService
  ) {}

  ngOnInit(): void {
    this.prodRef = this.productService.getAllProducts().subscribe(p => {
      this.produits = p;
    });

    this.productService.reactiveInterval$.subscribe((e) => {
      console.log(e);
    });

    this.authervice.getStatus().pipe(tap((x) => console.log('status', x))).subscribe();

    //this.productService.getMyService().subscribe()
  }

  isPromo(product: SimpleProduct) {

  }


  addToCart(product: SimpleProduct) {

  }


  logout() {
    this.authervice.logout();
  }


  ngOnDestroy(): void {
      this.prodRef.unsubscribe();
  }
}
