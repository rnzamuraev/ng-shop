import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewCardComponent } from './new-card.component';

@NgModule({
  declarations: [NewCardComponent],
  imports: [CommonModule],
  exports: [NewCardComponent],
})
export class NewCardModule {}
