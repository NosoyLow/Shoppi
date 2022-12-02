import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from 'src/app/interfaces/product-response';
import { host } from 'src/environments/environment';
import { hostCloud } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductResponse>(`${hostCloud}posts/get`)
  }


}
