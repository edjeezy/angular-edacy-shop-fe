import { Component, OnInit } from "@angular/core";
import { createProduct, createProducts } from "./shared/donnees/produit.generator";
import { SimpleProduct } from "./shared/interfaces/produit";


@Component({
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  public productCache!: SimpleProduct[];
  public produits!: SimpleProduct[];
  public produit: SimpleProduct = createProduct();
  public message = 'Acceuil - Recherche';
  private pr = "test";
  constructor() {}

  // Avant de demmarrer fais ceci
  public ngOnInit() {

    this.produits = createProducts(36);
    this.productCache = this.produits;

    const objA: any = { name: 'Asse', id: 0, };

    const objB: any = { name: 'Modou'};

    const objC: any = {...objA, name: 'Ass2'};



    console.log('destructuration object', objC);
    
    const a = [1 , 3];
    const b = [4]

    const c = [...a, ...b, 5]

    console.log('destructuration', c);
    
  }

  public isPromo(produit: SimpleProduct): boolean {
    return produit.promo;
  }

  public addToCart(prod: SimpleProduct) {
    console.log(prod);
  }

  public filtrerProduits(text: string) {
    this.handleFiltering(text);
  }

  private handleFiltering(t: string) {
    if(t === null || !t.length) {
      this.produits = this.productCache;
    }

    this.produits = this.productCache.filter((_produit) =>  _produit.name.includes(t));
  }
}

// Home page 
// app-landing
// app-categories
// app-products
// app-faq

// Search bar (if possible)