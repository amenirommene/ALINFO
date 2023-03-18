import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-component',
 // providers:[ProductService],
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  test:string;
  name:string;
  price : number = 1900000;
  listproducts:Product[];
  p : number = 10;
  getp(val){
    this.p=val;
  }
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.name="1ALINFO5";
    this.test="";
    this.ps.getAllProduct().subscribe(data=>this.listproducts=data);
    /*this.listproducts=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }*/
}
  f(){
    console.log("Bonjour");
    this.test="Hello";
  }
  buyP(p:Product){
    p.quantity =p.quantity-1;
  }
  likeP(p:Product){
    p.like =p.like+1;
  }

}
