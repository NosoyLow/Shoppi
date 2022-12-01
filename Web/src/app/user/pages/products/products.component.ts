import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsResponse: any
  productsData: any


  viewProductsRoute = "user/viewProduct/"
  modifyProductRoute = "user/modifyProduct/"

  constructor(private userService: UserService, private router: Router) { 
    userService.getUserProducts(1).subscribe(
      res => { this.productsResponse = res.body },
      err => { console.log(err) },
      () => { this.productsData = this.productsResponse.data, console.log(this.productsData) }
    );
  }

  viewProduct(productID: string){
    this.router.navigate([this.viewProductsRoute, productID])
  }

  modifyProduct(productID: string){
    this.router.navigate([this.modifyProductRoute, productID])
  }

  deleteProduct(productID: string){
    console.log(productID);
    this.userService.deleteUserProduct(productID).subscribe(
      res => { console.log(res) },
      err => { console.log(err) }
    );
  }


}