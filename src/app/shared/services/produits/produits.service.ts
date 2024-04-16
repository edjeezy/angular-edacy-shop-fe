import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, first, tap } from 'rxjs';
import { SimpleProduct } from '../../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  apiUrl = 'http://localhost:3000/';
  enpdoint = 'produits';
  serviceEndpoint = 'services';
  url = this.apiUrl + this.enpdoint;
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts(): Observable<SimpleProduct[]> {
    return this.httpClient.get<SimpleProduct[]>(this.url).pipe(
      tap(produits => console.log(produits)),
      //first()

    );
  }

  getProduitsEtServices() {
    combineLatest([
      this.httpClient.get<SimpleProduct[]>(this.url),
      this.httpClient.get<any[]>(this.apiUrl + this.serviceEndpoint)
    ]).pipe().subscribe((data) => {
      const prod = data[0]
      const services = data[1];
    })
  }
}
