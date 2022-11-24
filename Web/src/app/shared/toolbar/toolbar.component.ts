import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent{

  constructor(private router: Router) { }

  register = ["auth/register"]
  login = ["auth/login"]
  
  goRegister(){
    this.router.navigate(this.register)
  }

  goLogin(){
    this.router.navigate(this.login)
  }

}
