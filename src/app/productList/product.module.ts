import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'productList', component: ProductListComponent},
      {
        path: 'productList/:id', component: ProductsDetailComponent,
        canActivate: [ProductsDetailGuard]
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
