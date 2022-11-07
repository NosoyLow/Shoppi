import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;

  constructor(private formBuilder: FormBuilder) {}

  loginForm = this.formBuilder.group({
    username:[
      '', 
      [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9_-]{5,20}$")] 
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
    return this.loginForm.controls.username.errors && this.loginForm.controls.username.touched
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
    
  }

}