import { NgModule } from "@angular/core";
// import { CartModule } from "./cart/cart.module";
import { BagModule } from "./bag/bag.module";
import { ElectronicsModule } from "./electronics/electronics.module";
import { FavoritesModule } from "./favorites/favorites.module";
import { HomeModule } from "./home/home.module";
import { JewelryModule } from "./jewelry/jewelry.module";
import { LessModule } from "./less/less.module";
import { MenModule } from "./men/men.module";
import { NotFoundModule } from "./not-found/not-found.module";
import { ProductNameModule } from "./product-name/product-name.module";
import { ProductModule } from "./product/product.module";
import { TrendingModule } from "./trending/trending.module";
import { UserModule } from "./user/user.module";
import { WomenModule } from "./women/women.module";

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
    UserModule,
    NotFoundModule,
  ],
})
export class PagesModule {}
