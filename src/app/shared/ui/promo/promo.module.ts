import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BtnModule } from "src/app/shared/ui/btn/btn.module";
import { PromoComponent } from "./promo.component";

@NgModule({
  declarations: [PromoComponent],
  imports: [CommonModule, BtnModule, RouterModule],
  exports: [PromoComponent],
})
export class PromoModule {}
