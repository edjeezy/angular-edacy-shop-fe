import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable, Subject, Subscription, first, from, lastValueFrom, take, takeUntil, tap } from 'rxjs';
import { SimpleProduct } from '../../../shared/interfaces/produit';

import { CrudService } from '../../../shared/services/crud/crud.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  produits!: SimpleProduct[];
  destroy$ = new Subject();
  constructor(
    private authervice: AuthService,
    private crud: CrudService
  ) {}


  ngOnInit(): void {
    this.getProds();
/*     this.productService.getAllProducts()
    .pipe(
      // Garder jusqua
      takeUntil(this.destroy$),
      //Prends le premier seulement
      first(),
      // Prends x elementss avant de completer
      take(3),
    )
    .subscribe(p => {
      this.produits = p;
    }); */

/*     this.productService.reactiveInterval$
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((e) => {
      console.log(e);
    });

    this.authervice.getStatus().pipe(
      takeUntil(this.destroy$),
      tap((x) => console.log('status', x))
    ).subscribe();
 */
    //this.productService.getMyService().subscribe()
  }

  isPromo(product: SimpleProduct) {

  }


  addToCart(product: SimpleProduct) {

  }

  async getProds() {
    try {
      this.produits = await lastValueFrom(
        this.crud.getAll('produits')
       .pipe(
         // Garder jusqua
         takeUntil(this.destroy$),
         //Prends le premier seulement
         first(),
       )
      );
    } catch (error) {
      console.error(error)
      
    }
  }


  logout() {
    this.authervice.logout();
  }


  ngOnDestroy(): void {
      this.destroy$.next(null);
  }
}
