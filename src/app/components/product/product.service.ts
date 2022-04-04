import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ShowMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  baseUrl = "http://localhost:3001/Produtos";
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.handlerError(e))
    );
  }

  handlerError(e: any): Observable<any> {
    this.ShowMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.handlerError(e))
    );
  }

  getByid(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.handlerError(e))
    );

  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.handlerError(e))
    );
  }

  delete(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.handlerError(e))
    );
  }



}
