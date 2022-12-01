import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ModifyProductComponent } from './pages/modify-product/modify-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'createProduct',
        component: CreateProductComponent
      },
      {
        path: 'viewProduct/:id',
        component: ViewProductComponent
      },
      {
        path: 'modifyProduct/:id',
        component: ModifyProductComponent
      },
      {
        path: '**',
        redirectTo: 'products'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
