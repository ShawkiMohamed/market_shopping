import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products/services/products.service';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  carts:any[] = []
  products:any[] = []
  total = 0
  details:any;
  form!:FormGroup
  
  constructor( private service:CartsService , private build:FormBuilder , private productService:ProductsService) { }

  ngOnInit(): void {

    this.form = this.build.group({
      start: [''],
      end: ['']
    })


    this.getAllCarts()
    
  }
 
  //function to retuen all carts
  getAllCarts()
  {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    }
      )
  }


  //function to get data depend on start date and end date
  applyFilter()
  {
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res
    }
      )
  }

  //function to delete item
  deleteCart(id:number)
  {
    this.service.daleteCart(id).subscribe(res => {
      this.getAllCarts()
      alert("Cart deleted success")
    })
  }
  
  view(index:number)
  {
    this.products = []
    this.details = this.carts[index]
    for(let x in this.details.products)
    {
      this.productService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({item:res , quantity:this.details.products[x].quantity})
      })
    }
    console.log(this.details)
  }




}
