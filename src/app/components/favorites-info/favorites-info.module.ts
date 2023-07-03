import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesInfoComponent } from './favorites-info.component';



@NgModule({
  declarations: [
    FavoritesInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FavoritesInfoComponent]
})
export class FavoritesInfoModule { }
