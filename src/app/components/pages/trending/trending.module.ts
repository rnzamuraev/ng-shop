import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrendingComponent } from "./trending.component";
import { ProductListModule } from "src/app/shared/ui/product-list/product-list.module";
import { SideBarModule } from "src/app/shared/ui/side-bar/side-bar.module";
import { PromoModule } from "src/app/shared/ui/promo/promo.module";

@NgModule({
  declarations: [TrendingComponent],
  imports: [CommonModule, ProductListModule, SideBarModule, PromoModule],
})
export class TrendingModule {}
