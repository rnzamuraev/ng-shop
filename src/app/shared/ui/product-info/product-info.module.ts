import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BtnModule } from "src/app/shared/ui/btn/btn.module";
import { DirectiveModule } from "../../directive/directive.module";
import { LoadingModule } from "../loading/loading.module";
import { ProductInfoComponent } from "./product-info.component";
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ProductInfoComponent],
  imports: [CommonModule, BtnModule, LoadingModule, DirectiveModule, FormsModule],
  exports: [ProductInfoComponent],
})
export class ProductInfoModule {}
