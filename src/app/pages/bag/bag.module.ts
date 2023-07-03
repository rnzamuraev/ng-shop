import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BagComponent } from "./bag.component";

@NgModule({
  declarations: [BagComponent],
  imports: [CommonModule],
  exports: [BagComponent],
})
export class BagModule {}
