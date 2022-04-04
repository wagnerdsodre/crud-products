import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

/*Mock temp */
product: Product = {
name:'Computador Gamer',
price: 2300.00
}


  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {  }

  // Method Create Porduct
  CreateProduct():void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.ShowMessage("Product create with sucess")
      this.router.navigate(["/products"])

    })
  }

  //Method Cancel Navigate
  Cancel():void{
    this.router.navigate(["/products"]);
  }

}
