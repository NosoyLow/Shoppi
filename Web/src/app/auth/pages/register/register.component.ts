import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  hide = true;
  imagen = []
  archivos = []

  constructor(private formBuilder: FormBuilder,private RegService: RegisterService) {}

  loginForm = this.formBuilder.group({
    username:[
      '', 
      [
        Validators.required,
        Validators.pattern("^[A-Za-z0-9_-]{5,20}$")
      ] 
    ],
    name:[
      '', 
      [
        Validators.required,
        Validators.pattern("^[ A-Za-z0-9_-]{1,30}$")
      ] 
    ],
    last_name:[
      '', 
      [
        Validators.required,
        Validators.pattern("^[ A-Za-z0-9_-]{1,30}$")
      ] 
    ],
    phone:[
      '', 
      [
        Validators.required,
        Validators.pattern("^[0-9]{10}$")
      ] 
    ],
    email:[
      '', 
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){1,2}$")
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

  noUsernameValid(){ return this.loginForm.controls.username.errors && this.loginForm.controls.username.touched }
  
  noNameValid(){ return this.loginForm.controls.name.errors && this.loginForm.controls.name.touched }

  noLastnameValid(){ return this.loginForm.controls.last_name.errors && this.loginForm.controls.last_name.touched }

  noPhoneValid(){ return this.loginForm.controls.phone.errors && this.loginForm.controls.phone.touched }

  noEmailValid(){ return this.loginForm.controls.email.errors && this.loginForm.controls.email.touched }

  noPasswordValid(){ return this.loginForm.controls.password.errors && this.loginForm.controls.password.touched }

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0]
    this.imagen = archivoCapturado
    //console.log(event.target.files)
  }

  saveForm(){
    if ( this.loginForm.invalid ){
      this.loginForm.markAllAsTouched()
      return;
    }

    const formularioDeDatos = new FormData();

    formularioDeDatos.append("username", this.loginForm.controls.username.value!.toString())
    formularioDeDatos.append("name", this.loginForm.controls.name.value!.toString())
    formularioDeDatos.append("last_name", this.loginForm.controls.last_name.value!.toString())
    formularioDeDatos.append("email", this.loginForm.controls.email.value!.toString())
    formularioDeDatos.append("password", this.loginForm.controls.password.value!.toString())
    formularioDeDatos.append("phone", this.loginForm.controls.phone.value!.toString())

    this.RegService.doRegister(formularioDeDatos, this.imagen)
  }

}