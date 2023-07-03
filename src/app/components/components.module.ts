import { NgModule } from "@angular/core";
// import { BtnComponent } from '../shared/ui/btn/btn.component';
// import { CardComponent } from './card/card.component';
import { HeaderModule } from "./header/header.module";
// import { FormComponent } from './form/form.component';
// import { LoadingComponent } from '../shared/ui/loading/loading.component';
import { CommonModule } from "@angular/common";
import { BtnModule } from "../shared/ui/btn/btn.module";
import { FooterModule } from "./footer/footer.module";
import { MainModule } from "./main/main.module";
import { NewyearModule } from "./newyear/newyear.module";
import { WorthSeeingModule } from "./worth-seeing/worth-seeing.module";
import { FavoritesInfoModule } from "./favorites-info/favorites-info.module";

@NgModule({
  declarations: [
    // CardComponent
  ],
  imports: [CommonModule, BtnModule],
  exports: [
    HeaderModule,
    FooterModule,
    MainModule,
    NewyearModule,
    WorthSeeingModule,
    FavoritesInfoModule,
  ],
})
export class ComponentsModule {}
