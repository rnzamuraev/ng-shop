import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductNameComponent } from './product-name.component';

@NgModule({
  declarations: [ProductNameComponent],
  imports: [CommonModule],
  exports: [ProductNameComponent],
})
export class ProductNameModule {}
