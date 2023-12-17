import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private baseUrl:string ="http://localhost:3000/products";
  private baseUrl:string ="http://18.226.52.75:8181/phase3/admin/product";

  constructor(public httpClient:HttpClient) { }  // DI for HttpClient 


  loadAllProductDetails():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl+"/findAll");  
  }

  deleteProductById(pid:any):Observable<string> {
  //  return this.httpClient.delete(this.baseUrl+"/"+pid);
      return this.httpClient.delete(this.baseUrl+"?pid="+pid,{responseType: 'text'});
  }

  storeProduct(product:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/store",product,{responseType:'text'});
  }

}