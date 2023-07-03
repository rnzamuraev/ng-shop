import { NgModule } from "@angular/core";
import { BlockCardsModule } from "./block-cards/block-cards.module";
import { BtnModule } from "./btn/btn.module";
import { CardModule } from "./card/card.module";
import { LoadingModule } from "./loading/loading.module";
import { NewCardModule } from "./new-card/new-card.module";
import { ProductInfoModule } from "./product-info/product-info.module";
import { PromoModule } from "./promo/promo.module";
import { SideBarModule } from "./side-bar/side-bar.module";
import { ModalModule } from "./modal/modal.module";
import { ProductListModule } from "./product-list/product-list.module";

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
    ProductInfoModule,
    ModalModule,
    ProductListModule,
  ],
})
export class UiModule {}
