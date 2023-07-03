import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BtnModule } from "../btn/btn.module";
import { CardModule } from "../card/card.module";
import { BlockCardsComponent } from "./block-cards.component";

@NgModule({
  declarations: [BlockCardsComponent],
  imports: [CommonModule, CardModule, BtnModule],
  exports: [BlockCardsComponent],
})
export class BlockCardsModule {}
