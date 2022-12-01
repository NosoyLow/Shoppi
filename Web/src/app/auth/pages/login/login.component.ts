import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  products = ["/products"]
  hide = true;

  constructor(private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog, private authService: AuthService) {}

  loginForm = this.formBuilder.group({
    email:[
      '', 
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,2}$/)
      ] 
    ],
    password:[
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,16}$/)
       ]
    ]
  })

  noUserValid(){
    return this.loginForm.controls.email.errors && this.loginForm.controls.email.touched
  }

  noPasswordValid(){
    return this.loginForm.controls.password.errors && this.loginForm.controls.password.touched
  }

  goProducts(){
    this.router.navigate(this.products)
  }

  saveForm(){
    if ( this.loginForm.invalid ){
      this.loginForm.markAllAsTouched()
      return;
    }

    this.authService.doLogin(this.loginForm.value).subscribe(
      res => {this.router.navigate(this.products)},
      err => {this.dialog.open(LoginDialog);}
    );
  }

  // saveFormd(){
  //   if ( this.loginForm.invalid ){
  //     this.loginForm.markAllAsTouched()
  //     return;
  //   }

  //   //console.log('Data:', this.loginForm.value);
  //   let loginResponse: any
  //   this.authService.doLogin(this.loginForm.value).subscribe((resp) => {
  //     loginResponse = resp.body
  //     console.log(loginResponse)
  //    },
  //    (error) => {console.log("Soyunerror")}    
  //    )


  //   if (loginResponse == true){
  //     console.log("Sesión iniciada")
  //   }
  //   else{
  //     console.log("Sesión no iniciada")
  //   }
  //    //this.dialog.open(LoginDialog);
  
  // }
}

@Component({
  selector: 'login-dialog',
  templateUrl: '../components/login/loginDialog.html',
})
export class LoginDialog {}