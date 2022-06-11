import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
 
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {


  
  products:any=[];
  categories:any=[];
  loading:boolean = false;
  cartProducts:any[] = [];
  

  constructor( private service:ProductsService) { 
    
  }

  ngOnInit(): void {

    // call function when project start
    this.getProducts()
    this.getCategories()
  }

  // function to get data from service module
 
  getProducts(){
    this.loading = true
    this.service.getAllProducts().subscribe( res=> {
      this.products = res
      this.loading = false   // to make loading until url is ready
      
    } , error=> {
      alert(error);
      this.loading = true
    })

  }


  // function to get categories from service module
  getCategories(){
    this.loading = true
    this.service.getAllCategories().subscribe( res=> {
      this.categories = res
      this.loading = false
      
    } , error=> {
      alert(error)
      this.loading = true
    })

  }

  // function to get the value of change in select
  filterCategory(event:any)
  {
    let value = event.target.value
    if(value == 'all')   // if user select all
    {
      this.getProducts()
    }
    else
    {
      this.getProductsCategory(value)
    }
   
  }


  getProductsCategory(keyword:string)
  {
    this.loading = true
    this.service.getProductsByCategory(keyword).subscribe( res=> {
      this.products = res
      this.loading = false
      
    } , error=> {
      alert(error)
      this.loading = true
    })
  }
// end


// to add an item to cart in localstorage 
addToCart(event:any)
{
  if ("cart" in localStorage)
  {
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!) // to get data from localstorag

    let exist = this.cartProducts.find(item => item.item.id == event.item.id) //to equal  item id  with event card
    
    if(exist)                     // to check if item in cart or no
    {
      alert("this item already exists in cart")
    }
    else
    {
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts)) // to send data to localstorage
    }
    
  }
  else
  {
    this.cartProducts.push(event)
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  
}

}
