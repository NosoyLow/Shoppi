import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent{
  value = ""
  Response: any
  Products : any
  productIDRouter = "products/product"
  
  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params => console.log('queryParams', params['activated']));

    productsService.getProducts().subscribe(resp => {

      this.Response = resp
      this.Products = resp.data
     },
     err => {},
     () => {let low = this.Response.total_pages}
  )}

  viewProduct(idProduct: string){
    this.router.navigate([this.productIDRouter, idProduct])
  }

}
