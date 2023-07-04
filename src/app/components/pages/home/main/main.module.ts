import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PromoModule } from "../../../../shared/ui/promo/promo.module";
import { SideBarModule } from "../../../../shared/ui/side-bar/side-bar.module";
import { MainComponent } from "./main.component";

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SideBarModule, PromoModule],
  exports: [MainComponent],
})
export class MainModule {}
