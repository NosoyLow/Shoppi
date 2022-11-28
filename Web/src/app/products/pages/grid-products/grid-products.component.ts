import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent{

  value = "";

  Response: any
  Products : any

  constructor(private productsService: ProductsService, private authService: AuthService) {
    // this.authService.doAuth().subscribe(
    //   res => {console.log(res)},
    //   err => {console.log(err)}
    // );

    productsService.getProducts().subscribe(resp => {
      console.log(resp)
      this.Response = resp
      this.Products = resp.data
     //console.log(this.Products)
     })
  }

  


  openg(){
    console.log("HOla");
    
  }
}
