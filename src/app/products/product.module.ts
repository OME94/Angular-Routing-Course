import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ProductResolver } from './product-resolver.service';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
          {
            path: '',
            component: ProductListComponent,
            data: {pageTitle: 'Products'}
          },
          {
            path:':id',
            component: ProductDetailComponent,
            resolve: {resolvedData: ProductResolver}
          },
          {
            path:':id/edit',
            component: ProductEditComponent,
            resolve: {resolvedData: ProductResolver},
            children: [
              {path: 'info', component: ProductEditInfoComponent},
              {path: 'tags', component: ProductEditTagsComponent},
              {path: '', redirectTo: 'info', pathMatch: 'full'}
            ]
          }
      ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ]
})
export class ProductModule { }
