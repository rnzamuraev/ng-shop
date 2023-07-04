import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProductInfoModule } from "src/app/components/pages/product/product-info/product-info.module";
import { SideBarModule } from "src/app/shared/ui/side-bar/side-bar.module";
import { ProductComponent } from "src/app/components/pages/product/product.component";

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, SideBarModule, ProductInfoModule],
  exports: [ProductComponent],
})
export class ProductModule {}
