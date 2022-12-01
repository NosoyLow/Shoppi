import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ModifyProductComponent } from './pages/modify-product/modify-product.component';


@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    CreateProductComponent,
    ViewProductComponent,
    ModifyProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
