import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  p:Product= new Product();//{id:11, like:0,price: 1500, title: 'product', quantity: 4};
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }
addP(){
this.ps.addProduct(this.p).subscribe();
this.p=new Product(); // vider le formulaire
//console.log(this.p);
  }

}
