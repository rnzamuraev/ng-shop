import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BagComponent } from "src/app/components/pages/bag/bag.component";
import { ElectronicsComponent } from "src/app/components/pages/electronics/electronics.component";
import { FavoritesComponent } from "src/app/components/pages/favorites/favorites.component";
import { HomeComponent } from "src/app/components/pages/home/home.component";
import { JewelryComponent } from "src/app/components/pages/jewelry/jewelry.component";
import { LessComponent } from "src/app/components/pages/less/less.component";
import { MenComponent } from "src/app/components/pages/men/men.component";
import { NotFoundComponent } from "src/app/components/pages/not-found/not-found.component";
import { ProductComponent } from "src/app/components/pages/product/product.component";
import { TrendingComponent } from "src/app/components/pages/trending/trending.component";
import { CurrentUserComponent } from "src/app/auth/components/current-user/current-user.component";
import { WomenComponent } from "src/app/components/pages/women/women.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "electronics", component: ElectronicsComponent },
  { path: "women", component: WomenComponent },
  { path: "men", component: MenComponent },
  { path: "jewelry", component: JewelryComponent },
  // { path: "sale", component: SaleComponent },
  { path: "trending", component: TrendingComponent },
  { path: "less-than-100$", component: LessComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "bag", component: BagComponent },
  { path: "my-account", component: CurrentUserComponent },
  {
    path: "product/:id",
    component: ProductComponent,
    // resolve: { data: productInfoResolver }
  },

  // { path: "**", redirectTo: "", component: HomeComponent },
  // { path: "error", component: HomeComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
