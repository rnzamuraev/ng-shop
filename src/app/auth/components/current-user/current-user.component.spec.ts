import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CurrentUserComponent } from "./current-user.component";

describe("UserComponent", () => {
  let component: CurrentUserComponent;
  let fixture: ComponentFixture<CurrentUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentUserComponent],
    });
    fixture = TestBed.createComponent(CurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});