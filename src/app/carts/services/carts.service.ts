import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor( private http:HttpClient) { }

  //function to catch url
  getAllCarts(param?:any)
  {
    let params = new HttpParams()     // intit params
    params = params.append("startDate" , param?.start).append("endDate" , param?.end )   // append date
    return this.http.get( environment.baseApi + "carts" , {params:params})
  }

  daleteCart(id:number)
  {
    return this.http.delete(environment.baseApi + "carts/" + id)
  }

}
