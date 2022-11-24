import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  doRegister(data: FormData, image: any){
    
    data.append("image", image)

    data.forEach((key,value)=>{console.log(key, value)})
    this.http.post("http://localhost:80/api/register", data).subscribe( resp => console.log(resp))
  }

  doLogin(loginForm: any){
    this.http.post("http://localhost:80/api/login", loginForm, {observe: "response", withCredentials: true}).subscribe( resp => console.log(resp))
  }


  doLoginTEST(loginForm: any){
    this.http.post("http://localhost:80/api/login", loginForm, {observe: "response", withCredentials: true}).subscribe( resp => console.log(resp))
  }
}
