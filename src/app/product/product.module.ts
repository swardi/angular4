import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {RouterModule} from '@angular/router';
import {ProductService} from './product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:'product/list', component: ProductListComponent},
					   {path:'product/create', component: ProductCreateComponent},
					   {path:'product/create/:id', component: ProductCreateComponent}])
  ],
  providers:[ProductService],
  declarations: [ProductListComponent, ProductCreateComponent]
})
export class ProductModule { }
