import { NgModule } from "@angular/core";
import { UiModule } from "./ui/ui.module";
import { DirectiveModule } from "./directive/directive.module";

@NgModule({
  declarations: [],
  exports: [UiModule, DirectiveModule],
})
export class SharedModule {}
