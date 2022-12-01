import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  showFiller = true;
  frontPage = [""]
  constructor(private authService: AuthService, private router: Router) { }

  goProducts(){}

  goAdmin(){}

  Logout(){
    this.authService.doLogOut().subscribe(resp => console.log(resp))
    this.router.navigate(this.frontPage)
  }
}
