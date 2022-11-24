import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from 'src/app/interfaces/product-response';
import {catchError, map, Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    //return this.http.get("http://localhost:80/api/posts/get").map(res => {return res.json()})

    return this.http.get<ProductResponse>("http://localhost:80/api/posts/get")
    //return this.http.get("http://localhost:80/api/posts/get").map((resp: Response => resp.json()))
  
  }


}
