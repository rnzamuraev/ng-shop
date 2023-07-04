import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryComponent } from './jewelry.component';

describe('JewelryComponent', () => {
  let component: JewelryComponent;
  let fixture: ComponentFixture<JewelryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JewelryComponent],
    });
    fixture = TestBed.createComponent(JewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
