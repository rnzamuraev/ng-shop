import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MyDetailsComponent } from "./my-details.component";
import { BtnModule } from "src/app/shared/ui/btn/btn.module";

@NgModule({
  declarations: [MyDetailsComponent],
  imports: [CommonModule, ReactiveFormsModule, BtnModule],
  exports: [MyDetailsComponent],
})
export class MyDetailsModule {}
