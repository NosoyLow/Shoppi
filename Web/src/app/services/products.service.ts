import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from 'src/app/interfaces/product-response';
import { host } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    //return this.http.get("http://localhost:80/api/posts/get").map(res => {return res.json()})

    return this.http.get<ProductResponse>(`${host}posts/get`)
    //return this.http.get("http://localhost:80/api/posts/get").map((resp: Response => resp.json()))
  
  }


}
