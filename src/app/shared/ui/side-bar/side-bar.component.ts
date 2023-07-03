import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductsService } from "src/app/shared/services/products.service";
import { FormService } from "../../services/form.service";
import { ECategory, ENavLink, ENavMenu } from "../../types/products";
import { IFilterValue } from "../product-list/types";
// import { Observable } from 'rxjs';

@Component({
  selector: "shop-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export default class SideBarComponent implements OnInit, OnDestroy {
  public active = false;
  public navMenu = [
    { page: ENavMenu.Home, path: ENavLink.Home, category: ECategory.Home, indicator: true },
    {
      page: ENavMenu.Electronics,
      path: ENavLink.Electronics,
      category: ECategory.Electronics,
      indicator: false,
    },
    { page: ENavMenu.Women, path: ENavLink.Women, category: ECategory.Women, indicator: false },
    { page: ENavMenu.Men, path: ENavLink.Men, category: ECategory.Men, indicator: false },
    {
      page: ENavMenu.Furniture,
      path: ENavLink.Furniture,
      category: ECategory.Furniture,
      indicator: false,
    },
    {
      page: ENavMenu.Trending,
      path: ENavLink.Trending,
      category: ECategory.Trending,
      indicator: false,
    },
    {
      page: ENavMenu.LessThen100$,
      path: ENavLink.LessThen100$,
      category: ECategory.LessThen100$,
      indicator: false,
    },
  ];
  myFilterForm = this.formService.getFilterForm;
  private form!: IFilterValue;

  // console.log(el.children);
  // public onClickHandler(el: HTMLElement) {
  //   el.style.color = '#6c3eb8';
  // }

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private formService: FormService
  ) {
    this.myFilterForm.subscribe(form => {
      console.log(form);

      this.form = form;
    });
  }

  ngOnInit(): void {
    this.setNavIndicator();
  }

  private setNavIndicator() {
    const page = this.productsService.getUrlPagePathname();
    console.log(page);

    this.navMenu.forEach(el => {
      el.indicator = false;
      if (page !== el.path) {
        return;
      }
      el.indicator = true;

      this.productsService.setCategoryAndTitle(el.category, el.page);
    });
  }

  public onClickHandler() {
    // if (this.form)
    this.form = {
      title: "",
      min: "",
      max: "",
    };
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }
}
