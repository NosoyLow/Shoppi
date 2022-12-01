import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { host } from '../../environments/environment';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  
  doRegister(data: FormData, image: any){
    
    data.append("image", image)

    //data.forEach((key,value)=>{console.log(key, value)})
    return this.http.post(`${host}register`, data)
  }

  doLogin(loginForm: any){
    //this.http.post(`${host}login`, loginForm, {observe: "response", withCredentials: true}).subscribe( resp => console.log(resp))
    return this.http.post<LoginResponse>(`${host}login`, loginForm, {observe: "response", withCredentials: true})
  }

  doAuth(){
    return this.http.get<LoginResponse>(`${host}auth`, {observe: "response", withCredentials: true})
  }

  doLogOut(){
    return this.http.delete(`${host}logout`, {observe: "response", withCredentials: true})
  }
}
