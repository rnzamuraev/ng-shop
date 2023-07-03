import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { SearchModule } from "src/app/components/header/search/search.module";
import { MenuIconModule } from "./menu-icon/menu-icon.module";
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SearchModule, MenuIconModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
