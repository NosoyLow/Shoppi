import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent{

  value = "";

  Response: any
  Products : any

  constructor(private productsService: ProductsService) {
    productsService.getProducts().subscribe(resp => {
      this.Response = resp
      this.Products = resp.data
     console.log(this.Products)
     })
  }

}
