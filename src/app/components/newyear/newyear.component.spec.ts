import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewyearComponent } from './newyear.component';

describe('NewyearComponent', () => {
  let component: NewyearComponent;
  let fixture: ComponentFixture<NewyearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewyearComponent]
    });
    fixture = TestBed.createComponent(NewyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
