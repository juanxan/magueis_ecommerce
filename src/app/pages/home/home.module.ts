import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index/index.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon'
import { ProductsDetComponent } from './products-det/products-det.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CategoryComponent,
    IndexComponent,
    ProductsDetComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    MatIconModule
  ]
})
export class HomeModule { }
