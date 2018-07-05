import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadProductsComponent } from './read-products/read-products.component';
import { HttpModule } from '@angular/http';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReadOneProductComponent } from './read-one-product/read-one-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    ReadProductsComponent,
    CreateProductComponent,
    ReadOneProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
  ],
providers:[CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
