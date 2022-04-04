import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
   
  }

  CreateProduct():void{
    this.productService.ShowMessage("Product create with sucess");
  }

  Cancel():void{
    this.router.navigate(["/products"]);
  }

}
