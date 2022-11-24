import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  hide = true;
  imagen = []
  archivos = []

  constructor(private formBuilder: FormBuilder,private authService: AuthService) {}

  registerForm = this.formBuilder.group({
    username:[
      '', 
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]{3,20}$/)
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

  noUsernameValid(){ return this.registerForm.controls.username.errors && this.registerForm.controls.username.touched }
  
  noNameValid(){ return this.registerForm.controls.name.errors && this.registerForm.controls.name.touched }

  noLastnameValid(){ return this.registerForm.controls.last_name.errors && this.registerForm.controls.last_name.touched }

  noPhoneValid(){ return this.registerForm.controls.phone.errors && this.registerForm.controls.phone.touched }

  noEmailValid(){ return this.registerForm.controls.email.errors && this.registerForm.controls.email.touched }

  noPasswordValid(){ return this.registerForm.controls.password.errors && this.registerForm.controls.password.touched }

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0]
    this.imagen = archivoCapturado
    //console.log(event.target.files)
  }

  saveForm(){
    if ( this.registerForm.invalid ){
      this.registerForm.markAllAsTouched()
      return;
    }

    const formularioDeDatos = new FormData();

    formularioDeDatos.append("username", this.registerForm.controls.username.value!.toString())
    formularioDeDatos.append("name", this.registerForm.controls.name.value!.toString())
    formularioDeDatos.append("last_name", this.registerForm.controls.last_name.value!.toString())
    formularioDeDatos.append("email", this.registerForm.controls.email.value!.toString())
    formularioDeDatos.append("password", this.registerForm.controls.password.value!.toString())
    formularioDeDatos.append("phone", this.registerForm.controls.phone.value!.toString())

    this.authService.doRegister(formularioDeDatos, this.imagen)
  }

}