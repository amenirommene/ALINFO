import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
 // {path:"", component:HomeComponent},
  {path:"", redirectTo:"home",pathMatch:"full" },
  {path:"home", component:HomeComponent},
  {path:"add", component:AddProductComponent},
  {path:"product", component:ProductComponentComponent, children:[
    {path:"details", component:ProductDetailsComponent, children:[]}
  ]},
  {path:"details", component:ProductDetailsComponent},
  //à placer toujours en dernière position
  {path : "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
