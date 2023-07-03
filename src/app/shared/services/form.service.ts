import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { IFilterValue } from "../ui/product-list/types";

@Injectable({
  providedIn: "root",
})
export class FormService {
  private filterForm = new Subject<IFilterValue>();

  constructor() {}

  public get getFilterForm() {
    return this.filterForm.asObservable();
  }

  public setFilterForm(form: IFilterValue) {
    this.filterForm.next(form);
  }
}
