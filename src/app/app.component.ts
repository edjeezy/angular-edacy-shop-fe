import { Component, OnInit } from "@angular/core";
import { SimpleProduct } from "./interfaces/produit";
import { createProducts } from "./donnees/produit.generator";
import { Observable } from "rxjs";

 @Component({
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  selector: 'app-root',
})
export class AppComponent implements OnInit {
  produits!: SimpleProduct[];
  
  // Avant de demmarrer fais ceci
  ngOnInit() {
    this.produits = createProducts();
  }
}