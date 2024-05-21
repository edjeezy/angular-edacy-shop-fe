import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../shared/services/crud/crud.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../../shared/interfaces/endpoints-enum';

@Component({
  selector: 'app-categories-caroussel',
  templateUrl: './categories-caroussel.component.html',
  styleUrl: './categories-caroussel.component.css'
})
export class CategoriesCarousselComponent implements OnInit {
  cat$ !: Observable<any[]>;
  constructor(private crud: CrudService) {}

  ngOnInit(): void {
      this.cat$ = this.crud.getAll(ENDPOINT.CATEGUORIES);
  }
}
