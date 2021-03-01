import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViwAllProductsByDateComponent } from './viw-all-products-by-date/viw-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';


@NgModule({
  declarations: [
    ProductsComponent, 
    CreateProductComponent, 
    ViewProductComponent, 
    ViewAllProductsComponent, 
    UpdateProductComponent, 
    DeleteProductComponent, 
    ViwAllProductsByDateComponent, 
    ViewAllProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
