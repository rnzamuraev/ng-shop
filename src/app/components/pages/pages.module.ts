import { NgModule } from "@angular/core";

import { BagModule } from "src/app/components/pages/bag/bag.module";
import { ElectronicsModule } from "src/app/components/pages/electronics/electronics.module";
import { FavoritesModule } from "src/app/components/pages/favorites/favorites.module";
import { HomeModule } from "src/app/components/pages/home/home.module";
import { JewelryModule } from "src/app/components/pages/jewelry/jewelry.module";
import { LessModule } from "src/app/components/pages/less/less.module";
import { MenModule } from "src/app/components/pages/men/men.module";
import { NotFoundModule } from "src/app/components/pages/not-found/not-found.module";
import { ProductNameModule } from "src/app/components/pages/product-name/product-name.module";
import { ProductModule } from "src/app/components/pages/product/product.module";
import { TrendingModule } from "src/app/components/pages/trending/trending.module";
import { WomenModule } from "src/app/components/pages/women/women.module";

@NgModule({
  declarations: [],
  exports: [
    BagModule,
    FavoritesModule,
    HomeModule,
    ElectronicsModule,
    WomenModule,
    MenModule,
    JewelryModule,
    TrendingModule,
    LessModule,
    ProductModule,
    ProductNameModule,
    NotFoundModule,
  ],
})
export class PagesModule {}
