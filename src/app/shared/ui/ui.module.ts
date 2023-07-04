import { NgModule } from "@angular/core";

import { BlockCardsModule } from "./block-cards/block-cards.module";
import { BtnModule } from "./btn/btn.module";
import { CardModule } from "./card/card.module";
import { LoadingModule } from "./loading/loading.module";
import { NewCardModule } from "./new-card/new-card.module";
import { ProductListModule } from "./product-list/product-list.module";
import { PromoModule } from "./promo/promo.module";
import { SideBarModule } from "./side-bar/side-bar.module";

@NgModule({
  declarations: [],
  exports: [
    BlockCardsModule,
    LoadingModule,
    BtnModule,
    CardModule,
    NewCardModule,
    PromoModule,
    SideBarModule,
    ProductListModule,
  ],
})
export class UiModule {}
