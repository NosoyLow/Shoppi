import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  doLogin(loginForm: any){
    this.http.post("localhost:80/api/login", {'email':'furdalispo@gufum.com', 'password':'jefFG32"eaf'}).subscribe( resp => console.log(resp))
    //console.log("")

  }



}
