import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  
  constructor(private userService: UserService ,private route: ActivatedRoute) { 
    this.userService.getUserProduct(this.route.snapshot.paramMap.get('id')!).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    )
  }


}
