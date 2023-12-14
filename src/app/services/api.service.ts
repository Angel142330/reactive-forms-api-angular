import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string ='https://fakestoreapi.com/products';

  private _httpClient= inject(HttpClient);

  public getAllProducts():Observable<IProduct[]>{
    return  this._httpClient.get<IProduct[]>(this.baseUrl);
  }

  public getProduct(id:number):Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }
  
}
