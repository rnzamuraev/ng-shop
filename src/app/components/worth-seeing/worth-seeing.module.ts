import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewCardModule } from 'src/app/shared/ui/new-card/new-card.module';
import { WorthSeeingComponent } from './worth-seeing.component';

@NgModule({
  declarations: [WorthSeeingComponent],
  imports: [CommonModule, NewCardModule],
  exports: [WorthSeeingComponent],
})
export class WorthSeeingModule {}
