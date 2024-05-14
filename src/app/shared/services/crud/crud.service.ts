import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap, first, retry, catchError, of } from 'rxjs';
import { SimpleProduct } from '../../interfaces/produit';

export interface PaginationOptions {
  pageSize: number;
  pageNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl = 'http://localhost:3000/';

  constructor(
    private httpClient: HttpClient,
    private matSnackbar: MatSnackBar
  ) { }

  getPaginated(endpoint: string, options?: PaginationOptions): Observable<SimpleProduct[]> {
    let params = new HttpParams();
    if (options) {
      params = params.set('_page', options.pageNumber.toString());
      params = params.set('_limit', options.pageSize.toString());
    }

    return this.httpClient.get<SimpleProduct[]>(this.apiUrl + endpoint, {params}).pipe(
      tap(produits => console.log(produits)),
      first(),
      retry(3),
      catchError((error) => {
        this.handleError(error);
        return of([]);
      })
    );
  }

  
  getAll(endpoint: string): Observable<any[]> {
    return this.httpClient.get<SimpleProduct[]>(this.apiUrl + endpoint).pipe(
      tap(produits => console.log(produits)),
      first(),
      retry(3),
      catchError((error) => {
        this.handleError(error);
        return of([]);
      })
    );
  }

  getById(endpoint: string, id: string) {
    return this.httpClient.get<SimpleProduct>(this.apiUrl + endpoint + '/' + id).pipe(
      tap(produits => console.log(produits)),
      first(),
      retry(3),
      catchError((error) => {
        this.handleError(error);
        return of(null);
      })
    );
  }


  post(endpoint: string, data: any) {
    return this.httpClient.post(this.apiUrl + endpoint, data).pipe(
      tap(console.log),
      catchError((error) => {
        this.handleError(error);
        return of(null);
      })
    )
  }
  
  patch(endpoint: string, id: string, data: any) {
    return this.httpClient.patch(this.apiUrl + endpoint + '/' + id, data).pipe(
      tap(console.log),
      catchError((error) => {
        this.handleError(error);
        return of(null);
      })
    )
  }

  delete(endpoint: string, id: string) {
    return this.httpClient.delete(this.apiUrl + endpoint + '/' + id).pipe(
      tap(produits => console.log(produits)),
      first(),
    )
  }


  private handleError(error: any) {
    console.error(error);
    this.matSnackbar.open("Erreur! " + error?.message + " " + error?.status);
  }

}
