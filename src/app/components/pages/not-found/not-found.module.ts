import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
