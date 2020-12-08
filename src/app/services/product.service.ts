import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

import { saleApis } from '../constants/api.constants';
import { paginatedResponse } from '../models/paginatedResponse.model';
import { productDetails } from '../models/productDetails.model';
import { productCard } from '../models/productCard.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(params?: HttpParams){
    return this.http.get<paginatedResponse<productCard>>(saleApis.products, {params})
  }

  getProductById(productId: number){
    return this.http.get<productDetails>(saleApis.products + productId)
  }

}
