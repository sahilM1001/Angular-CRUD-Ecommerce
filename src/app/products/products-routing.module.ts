import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViwAllProductsByDateComponent } from './viw-all-products-by-date/viw-all-products-by-date.component';

const routes: Routes = [
  { 
    path: '', 
    component: ViewAllProductsComponent 
  },
  { 
    path: 'createProduct', 
    component: CreateProductComponent 
  },
  { 
    path: 'deleteProduct', 
    component: DeleteProductComponent 
  },
  { 
    path: 'updateProduct', 
    component: UpdateProductComponent 
  },
  { 
    path: 'viewProduct', 
    component: ViewProductComponent
  },
  { 
    path: 'viewAll', 
    component: ViewAllProductsComponent 
  },
  { 
    path: 'viewBy-category', 
    component: ViewAllProductsByCategoryComponent 
  },
  { 
    path: 'viewBy-date', 
    component: ViwAllProductsByDateComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
