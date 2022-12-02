import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  gridProductsRoute = ["products/grid"]
  productsAccountRoute = ["user/products"]
  infoAccountRoute = ["user/account"]
  adminUsersRoute = [""]

  login = ["auth/login"]
  showFiller = true;
  frontPage = [""]

  constructor(private authService: AuthService, private router: Router) {
    authService.doAuth().subscribe(
      res => {},
      err => { this.router.navigate(this.login) }
    );
  }

  goBack(){
    this.router.navigate(this.gridProductsRoute)
  }

  goProducts(){
    this.router.navigate(this.productsAccountRoute)
  }

  goAccount(){
    this.router.navigate(this.infoAccountRoute)
  }

  goAdmin(){
  }

  Logout(){
    this.authService.doLogOut().subscribe(resp => console.log(resp))
    this.router.navigate(this.frontPage)
  }
}
