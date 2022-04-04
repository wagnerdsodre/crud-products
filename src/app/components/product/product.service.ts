import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

 ShowMessage(msg: string) : void{
   this.snackBar.open(msg, 'X' ,{
     duration:3000,
     horizontalPosition: "right",
     verticalPosition:"top"
   })
 }

 baseUrl ="http://localhost:3001/Produtos";
create(product: Product):Observable<Product>{
  return this.http.post<Product>(this.baseUrl,product);
}




}