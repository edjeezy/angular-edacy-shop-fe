import { Component, OnInit } from "@angular/core";
import { SimpleProduct } from "./interfaces/produit";
import { createProduct, createProducts } from "./donnees/produit.generator";


@Component({
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  public produits!: SimpleProduct[];
  public produit: SimpleProduct = createProduct();

  constructor() {}
  // Avant de demmarrer fais ceci
  ngOnInit() {
    this.produits = createProducts(16);
  }

  isPromo(produit: SimpleProduct): boolean {
    return produit.promo;
  }

}