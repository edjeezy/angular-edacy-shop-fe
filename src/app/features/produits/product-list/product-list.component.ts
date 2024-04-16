import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { SimpleProduct } from '../../../shared/interfaces/produit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  produits!: SimpleProduct[];
  constructor(
    private authervice: AuthService
  ) {}

  ngOnInit(): void {

  }

  isPromo(product: SimpleProduct) {

  }


  addToCart(product: SimpleProduct) {

  }
  logout() {
    this.authervice.logout();
  }

}
