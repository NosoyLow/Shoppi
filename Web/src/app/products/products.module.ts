import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';
import { GridProductsComponent } from './pages/grid-products/grid-products.component';
import { MenuComponent } from './pages/menu/menu.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    GridProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class ProductsModule { }