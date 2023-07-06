import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainModule } from "src/app/components/pages/home/main/main.module";
import { NewyearModule } from "src/app/components/pages/home/newyear/newyear.module";
import { BlockCardsModule } from "src/app/shared/ui/block-cards/block-cards.module";
import { HomeComponent } from "./home.component";
import { ModalModule } from "../../modal/modal.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MainModule, BlockCardsModule, NewyearModule, ModalModule],
  exports: [HomeComponent],
})
export class HomeModule {}
