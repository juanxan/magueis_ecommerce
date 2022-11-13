import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index/index.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductsComponent,
    CategoryComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
