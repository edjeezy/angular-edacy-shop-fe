import { Component, OnInit } from '@angular/core';
import { PaginationOptions, ProduitsService } from '../../../../../shared/services/produits/produits.service';
import { SimpleProduct } from '../../../../../shared/interfaces/produit';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'promoVal', 'actions'];
  dataSource = [];
  produits!: Observable<SimpleProduct[]>;
  pageSizeOptions = [5, 10, 20, 50];
  currentPage: number = 0;

  constructor(public produitsService: ProduitsService, private router: Router) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
   this.produits = this.produitsService.getPaginatedProducts({pageSize: 5, pageNumber: 1});
  }

  onPageChange(event: any) {
    console.log('page change', event);
    
    this.currentPage = event.pageIndex + 1; // Page index starts from 0
    this.fetchData({ pageSize: event.pageSize, pageNumber: event.pageIndex });
  }

  fetchData(opts: PaginationOptions) {
    this.produits = this.produitsService.getPaginatedProducts(opts);
  }

  async create() {
    await this.router.navigate(['/admin/admin-page/produits/create']);
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
