import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductListModule } from "src/app/shared/ui/product-list/product-list.module";
import { PromoModule } from "src/app/shared/ui/promo/promo.module";
import { SideBarModule } from "src/app/shared/ui/side-bar/side-bar.module";
import { ElectronicsComponent } from "src/app/pages/electronics/electronics.component";

@NgModule({
  declarations: [ElectronicsComponent],
  imports: [CommonModule, ProductListModule, SideBarModule, PromoModule],
  exports: [ElectronicsComponent],
})
export class ElectronicsModule {}
