import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [//les composants , directives, pipes crés 
    AppComponent,
    ProductComponentComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // directive ngModel
  ],
  providers: [],
  bootstrap: [AppComponent] //les composants de déclenchement (appelés dans le fichier index.html)
})
export class AppModule { }
