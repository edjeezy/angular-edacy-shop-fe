import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../../../../../shared/services/produits/produits.service';
import { SimpleProduct } from '../../../../../shared/interfaces/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'promoVal', 'actions'];
  dataSource = [];
  produits!: SimpleProduct[];

  constructor(public produitsService: ProduitsService, private router: Router) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.produitsService.getAllProducts().subscribe((data) => {
      this.produits = data;
      console.log(data)
    });
  }

  async handleEdit(el: SimpleProduct) {
    await this.router.navigate(['/admin/admin-page/produits/details', el.id])
  }

  handleDelete(el: SimpleProduct) {
    const conf = confirm('Etes vous sur? Operation non reversible...');
    if (conf) {
      this.produitsService.deleteProduct(el.id)
      .subscribe(() => this.init())
    }
  }
}
