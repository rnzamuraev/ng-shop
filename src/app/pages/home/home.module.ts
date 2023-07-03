import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { BlockCardsModule } from "src/app/shared/ui/block-cards/block-cards.module";
import { WorthSeeingModule } from "src/app/components/worth-seeing/worth-seeing.module";
import { NewyearModule } from "src/app/components/newyear/newyear.module";
import { MainModule } from "src/app/components/main/main.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MainModule, BlockCardsModule, WorthSeeingModule, NewyearModule],
  exports: [HomeComponent],
})
export class HomeModule {}
