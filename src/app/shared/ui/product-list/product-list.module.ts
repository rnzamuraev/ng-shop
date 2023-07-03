import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PipeModule } from "src/app/pipe/pipe.module";
import { BtnModule } from "src/app/shared/ui/btn/btn.module";
import { CardModule } from "src/app/shared/ui/card/card.module";
import { LoadingModule } from "src/app/shared/ui/loading/loading.module";
import { ProductListComponent } from "src/app/shared/ui/product-list/product-list.component";

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, CardModule, BtnModule, PipeModule, LoadingModule, FormsModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
