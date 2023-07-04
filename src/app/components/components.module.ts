import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FooterModule } from "src/app/components/footer/footer.module";
import { HeaderModule } from "src/app/components/header/header.module";
import { ModalModule } from "src/app/components/modal/modal.module";
import { PagesModule } from "src/app/components/pages/pages.module";
import { BtnModule } from "src/app/shared/ui/btn/btn.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, BtnModule],
  exports: [HeaderModule, FooterModule, PagesModule, ModalModule],
})
export class ComponentsModule {}
