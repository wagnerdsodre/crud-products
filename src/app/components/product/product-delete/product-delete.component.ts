import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getByid(id).subscribe(product => {
      this.product = product
    });
  }

 
  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.delete(id).subscribe(() => {
      this.productService.ShowMessage('Product delected with success')
      this.router.navigate(["/products"])

    })

  }

  cancel(): void {
    this.router.navigate(["/products"])
  }






  

}
