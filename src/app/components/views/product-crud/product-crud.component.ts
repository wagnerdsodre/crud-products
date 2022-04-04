import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeaderService } from '../../template/header/header.service';

 

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title : "Cadastro de Produtos",
      icons : 'storefront',
      routerUrl : '/products'
    } 
  }

  ngOnInit(): void {
  }

 NavigateProductCreate(): void {
   this.router.navigate(['products/create']);
 }


}
