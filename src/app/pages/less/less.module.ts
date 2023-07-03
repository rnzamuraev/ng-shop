import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LessComponent } from "./less.component";
import { ProductListModule } from "src/app/shared/ui/product-list/product-list.module";
import { SideBarModule } from "src/app/shared/ui/side-bar/side-bar.module";
import { PromoModule } from "src/app/shared/ui/promo/promo.module";

@NgModule({
  declarations: [LessComponent],
  imports: [CommonModule, SideBarModule, PromoModule, ProductListModule],
})
export class LessModule {}
