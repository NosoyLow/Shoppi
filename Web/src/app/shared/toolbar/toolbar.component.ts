import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent{
  auth = false
  data: any

  constructor(private authService: AuthService, private router: Router) {
    this.authService.doAuth().subscribe(
      res => {this.data = res.body?.user_data; this.auth = true},
      err => {this.auth = false}
    );
  }

  register = ["auth/register"]
  login = ["auth/login"]
  frontPage = [""]
  user = ["/user"]

  goRegister(){
    this.router.navigate(this.register)
  }

  goLogin(){
    this.router.navigate(this.login)
  }

  goUser(){
    this.router.navigate(this.user);
  }

  goFrontPage(){
    this.router.navigate(this.frontPage)
  }

}
