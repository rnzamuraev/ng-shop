import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule,RouterModule],
  exports: [SearchComponent],
})
export class SearchModule {}
