import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

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
        Validators.pattern('^[A-Za-z0-9_@./#&+-].{8,30}$')
       ]
    ]
  })

  noUserValid(){
    return this.loginForm.controls.email.errors && this.loginForm.controls.email.touched
  }

  noPasswordValid(){
    return this.loginForm.controls.password.errors && this.loginForm.controls.password.touched
  }

  saveForm(){
    if ( this.loginForm.invalid ){
      this.loginForm.markAllAsTouched()
      return;
    }

    console.log('Data:', this.loginForm.value);
    
    this.authService.doLoginTEST(this.loginForm.value)
  }

}