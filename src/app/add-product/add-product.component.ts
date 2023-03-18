import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  p:Product= new Product();//{id:11, like:0,price: 1500, title: 'product', quantity: 4};
  id:number;
  constructor(private ps:ProductService,private _router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    //snapshot permet de faire une capture sur l'url
    //params permet d'accéder aux paramètres
   //this.id= this.ac.snapshot.params['id'];
   this.ac.paramMap.subscribe(res=>{this.id=Number(res.get('id'));
  this.ps.getProductById(this.id).subscribe(res=>this.p=res)});

   
  }
addP(){
  if (this.id == 0){
this.ps.addProduct(this.p).subscribe(()=>this._router.navigateByUrl("/product"));
this.p=new Product(); // vider le formulaire
//console.log(this.p);
  } else{
this.ps.updateProduct(this.p).subscribe();
  }
  }

}
