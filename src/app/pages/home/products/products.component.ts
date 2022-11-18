import { Component, OnInit } from '@angular/core';
import { ProductsI } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: ProductsI[];

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe((resp: ProductsI[]) =>{
      this.products = resp;
    });
  }

}
