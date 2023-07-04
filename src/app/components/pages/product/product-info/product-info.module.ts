import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ProductInfoComponent } from "src/app/components/pages/product/product-info/product-info.component";
import { DirectiveModule } from "src/app/shared/directive/directive.module";
import { BtnModule } from "src/app/shared/ui/btn/btn.module";
import { LoadingModule } from "src/app/shared/ui/loading/loading.module";

@NgModule({
  declarations: [ProductInfoComponent],
  imports: [CommonModule, BtnModule, LoadingModule, DirectiveModule, FormsModule],
  exports: [ProductInfoComponent],
})
export class ProductInfoModule {}
