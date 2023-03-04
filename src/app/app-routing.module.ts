import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponentComponent } from './product-component/product-component.component';

const routes: Routes = [
 // {path:"", component:HomeComponent},
  {path:"", redirectTo:"home",pathMatch:"full" },
  {path:"home", component:HomeComponent},
  {path:"product", component:ProductComponentComponent},
  //à placer toujours en dernière position
  {path : "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }