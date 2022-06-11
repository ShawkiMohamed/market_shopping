import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }


  // to get data from api
  getAllProducts():Observable<any>
  {
    return this.http.get( environment.baseApi + 'products')
  }

  // to get categories of data
  getAllCategories():Observable<any>
  {
    return this.http.get( environment.baseApi + 'products/categories')
  }

  // to filter products by selection
  getProductsByCategory( keyword:string):Observable<any>
  {
    return this.http.get( environment.baseApi + 'products/category/' + keyword)
  }

  getProductById(id:any)
  {
    return this.http.get(environment.baseApi + 'products/' + id)
  }

}
