import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewyearComponent } from './newyear.component';
import { BtnModule } from 'src/app/shared/ui/btn/btn.module';

@NgModule({
  declarations: [NewyearComponent],
  imports: [CommonModule, BtnModule],
  exports: [NewyearComponent],
})
export class NewyearModule {}
