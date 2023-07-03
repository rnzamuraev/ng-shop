import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ElectronicsComponent } from "./pages/electronics/electronics.component";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { HomeComponent } from "./pages/home/home.component";
import { JewelryComponent } from "./pages/jewelry/jewelry.component";
import { MenComponent } from "./pages/men/men.component";
import { TrendingComponent } from "./pages/trending/trending.component";
import { WomenComponent } from "./pages/women/women.component";
import { BagComponent } from "./pages/bag/bag.component";
import { LessComponent } from "./pages/less/less.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ProductComponent } from "./pages/product/product.component";
import { productInfoResolver } from "./shared/ui/product-info/product-info.resolver";
import { UserComponent } from "./pages/user/user.component";

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
  { path: "my-account", component: UserComponent },
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
