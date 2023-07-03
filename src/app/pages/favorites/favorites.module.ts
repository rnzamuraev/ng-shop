import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SideBarModule } from "src/app/shared/ui/side-bar/side-bar.module";
import { FavoritesComponent } from "./favorites.component";
import { BtnModule } from "src/app/shared/ui/btn/btn.module";
import { CardModule } from "src/app/shared/ui/card/card.module";

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, SideBarModule, BtnModule, CardModule],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
