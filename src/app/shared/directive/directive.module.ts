import { NgModule } from "@angular/core";
import { ResizeWidthWindowDirective } from "./resize-width-window.directive";

@NgModule({
  declarations: [ResizeWidthWindowDirective],
  exports: [ResizeWidthWindowDirective],
})
export class DirectiveModule {}
