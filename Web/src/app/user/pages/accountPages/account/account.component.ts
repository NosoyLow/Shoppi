import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  
  login = ["auth/login"]

  constructor(private authService: AuthService, private router: Router) {
    authService.doAuth().subscribe(
      res => {console.log(res)},
      err => { this.router.navigate(this.login) }
    );
  }





}