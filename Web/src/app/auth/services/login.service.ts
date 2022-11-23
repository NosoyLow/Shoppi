import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  doLogin(loginForm: any){
    this.http.post("http://localhost:80/api/login", loginForm, {withCredentials: true}).subscribe( resp => console.log(resp))
    //console.log("")

  }

  
}
