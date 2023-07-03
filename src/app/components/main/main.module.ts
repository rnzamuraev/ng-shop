import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SideBarModule } from '../../shared/ui/side-bar/side-bar.module';
import { PromoModule } from '../../shared/ui/promo/promo.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SideBarModule, PromoModule],
  exports: [MainComponent],
})
export class MainModule {}
