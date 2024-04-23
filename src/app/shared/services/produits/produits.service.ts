import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, combineLatest, first, from, interval, map, of, retry, switchMap, take, tap } from 'rxjs';
import { SimpleProduct } from '../../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  apiUrl = 'http://localhost:3000/';
  enpdoint = 'produits';
  serviceEndpoint = 'services';
  url = this.apiUrl + this.enpdoint;
  serviceUrl = this.apiUrl + this.serviceEndpoint;
  exObservable$ = from('whqvhqwd');
  ex2$ = of(Promise.resolve());
  reactiveInterval$ = interval(2000).pipe(
    tap((x) => console.log('before', x)),
    map((x) => x + 1),
    take(1)
  );
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts(): Observable<any[]> {
    return this.httpClient.get<SimpleProduct[]>(this.url).pipe(
      tap(produits => console.log(produits)),
      first(),
      retry(3),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getMyService() {
    return this.httpClient.get<SimpleProduct[]>(this.url).pipe(
      tap(produits => console.log("before", produits)),
      switchMap((produits) => this.httpClient.get(this.serviceUrl + "/" + produits[0].id)),
      tap(produits => console.log("after", produits)),
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
