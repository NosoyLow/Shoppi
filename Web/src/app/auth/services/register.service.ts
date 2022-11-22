import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  doRegister(data: FormData, image: any){
    
    data.append("image", image)

    data.forEach((key,value)=>{console.log(key, value)})
    this.http.post("http://localhost:80/api/register", data).subscribe( resp => console.log(resp))
  }

}
