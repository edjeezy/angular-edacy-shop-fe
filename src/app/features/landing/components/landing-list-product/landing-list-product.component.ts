import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud/crud.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../../shared/interfaces/endpoints-enum';

@Component({
  selector: 'app-landing-list-product',
  templateUrl: './landing-list-product.component.html',
  styleUrl: './landing-list-product.component.css'
})
export class LandingListProductComponent implements OnInit{
  prods$ !: Observable<any[]>;
  constructor(private crud: CrudService) {}

  ngOnInit(): void {
      this.prods$ = this.crud.getPaginated(ENDPOINT.PRODUITS, {pageNumber: 0, pageSize: 4});
  }

  buy() {}
}
