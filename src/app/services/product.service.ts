import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  purl : string = "http://localhost:3000/products";
  //on utilise le constructor pour injecter les services
 //injecter le service HttpClient dans cette classe
 //sous le nom de myHttp
  constructor(private myHttp:HttpClient) { }

  getProductById(id:number) : Observable<Product>{
  return this.myHttp.get<Product>(this.purl+"/"+id)
  }
  getAllProduct():Observable<Product[]>{
   //utiliser le service HttpClient et plus précisément la méthode "get"
  return this.myHttp.get<Product[]>(this.purl);
  }
  addProduct(p:Product):Observable<Product>{
    //utiliser le service HttpClient et plus précisément la méthode "post"
   return this.myHttp.post<Product>(this.purl,p);
   }
   updateProduct(p:Product):Observable<Product>{
    //utiliser le service HttpClient et plus précisément la méthode "post"
   return this.myHttp.put<Product>(this.purl+"/"+p.id,p);
   }
}
