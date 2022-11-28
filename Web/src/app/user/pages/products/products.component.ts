import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsResponse: any
  productsData: any

  constructor(userService: UserService) { 
    userService.getUserProducts(1).subscribe(
      res => { this.productsResponse = res.body },
      err => { console.log(err) },
      () => { this.productsData = this.productsResponse.data }
    );
  }

  openProduct(){
  }



}